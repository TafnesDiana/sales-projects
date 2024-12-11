'use client';
import { useState, useEffect } from "react";
import { Product } from "@/app/_components/productType";
import ProductCard from "@/app/_components/productCard";

interface ProductsProps {
    products: Product[];
}

const Search = ({ products }: ProductsProps) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [randomizedProducts, setRandomizedProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Adicionando o estado para os produtos filtrados
    const [currentPage, setCurrentPage] = useState<number>(1); // Página atual
    const productsPerPage = 8; // Número de produtos por página

    const categories = ["All", ...new Set(products.map((product) => product.category))];

    const toggleFilterVisibility = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    useEffect(() => {
        const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
        setRandomizedProducts(shuffledProducts);
        setFilteredProducts(shuffledProducts); // Inicialmente todos os produtos são exibidos
    }, [products]);

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredProducts(randomizedProducts); // Exibe todos os produtos quando a categoria é "All"
        } else {
            const filtered = randomizedProducts.filter((product) => product.category === selectedCategory);
            setFilteredProducts(filtered); // Exibe apenas os produtos filtrados
        }
        setCurrentPage(1); // Reseta a página para 1 sempre que o filtro mudar
    }, [selectedCategory, randomizedProducts]);

    // Função para dividir os produtos pela página
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Função para alterar a página
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Calcular o número total de páginas
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredProducts.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className="bg-[#FAF3EA] h-auto w-full flex justify-between px-10 py-8">
                <div className="flex items-center">
                    <div className="flex items-center space-x-3 cursor-pointer" onClick={toggleFilterVisibility}>
                        <img className="w-5" src="images/Filtering.svg" alt="Filter Icon" />
                        <p className="font-poppins text-sm md:text-base">Filter</p>
                    </div>
                    <img className="mx-4" src="images/Line.svg" alt="Separator" />
                    <p className="font-poppins text-sm md:text-base">
                        Showing 1–{currentProducts.length} of {filteredProducts.length} results
                    </p>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                        <p className="font-poppins text-sm md:text-base mr-2">Show</p>
                        <p className="bg-white px-4 py-3 text-[#9F9F9F]">{filteredProducts.length}</p>
                    </div>
                    <div className="flex items-center">
                        <p className="font-poppins text-sm md:text-base mr-2">Sort by</p>
                        <p className="bg-white px-6 py-3 text-[#9F9F9F]">{selectedCategory}</p>
                    </div>
                </div>
            </div>

            <div className="flex w-full">
                {isFilterVisible && (
                    <div className="md:w-1/4">
                        <div className={`w-full md:w-1/4 bg-[#dfdbd5] p-4 transition-all duration-300 transform ${isFilterVisible ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden absolute z-10`}>
                            <p className="font-poppins text-lg mb-2">Select Category</p>
                            {categories.map((category) => (
                                <p
                                    key={category}
                                    className="cursor-pointer hover:text-[#B88E2F] p-2"
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </p>
                            ))}
                        </div>
                    </div>
                )}

                {/* Cards */}
                <div className={`flex flex-wrap items-center justify-center sm:justify-start gap-4 md:gap-6 pl-8 ${isFilterVisible ? 'md:w-3/4' : 'w-full'}`}>
                    {currentProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            {/* Paginação */}
            <div className="flex justify-center my-4">
                <ul className="flex space-x-4">
                    {pageNumbers.map((number) => (
                        <li key={number}>
                            <button
                                onClick={() => paginate(number)}
                                className={`px-4 py-2 rounded-md ${number === currentPage ? 'bg-[#B88E2F] text-white' : 'bg-[#f0f0f0] text-black'}`}
                            >
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Search;
