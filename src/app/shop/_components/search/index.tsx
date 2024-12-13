'use client'
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "@/app/_components/productType";
import ProductCard from "@/app/_components/productCard";

interface ProductsProps {
    products: Product[];
}

const Search = ({ products }: ProductsProps) => {
    const searchParams = useSearchParams(); 
    const category = searchParams.get('category') || "All";

    const [selectedCategory, setSelectedCategory] = useState<string>(category ? String(category) : "All");
    const [selectedSort, setSelectedSort] = useState<string>("none");
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [randomizedProducts, setRandomizedProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const productsPerPage = 8;

    const categories = ["All", ...new Set(products.map((product) => product.category))];

    const toggleFilterVisibility = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    // Função para ordenar os produtos
    const sortProducts = (products: Product[], sortOption: string) => {
        if (sortOption === "alphabetical") {
            return [...products].sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOption === "price-asc") {
            return [...products].sort((a, b) => a.salePrice - b.salePrice);
        } else if (sortOption === "price-desc") {
            return [...products].sort((a, b) => b.salePrice - a.salePrice);
        }
        return products; // Caso seja "none", retorna os produtos sem alteração
    };

    useEffect(() => {
        const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
        setRandomizedProducts(shuffledProducts);
        setFilteredProducts(shuffledProducts);
    }, [products]);

    useEffect(() => {
        let filtered = randomizedProducts;
        if (selectedCategory !== "All") {
            filtered = randomizedProducts.filter((product) => product.category === selectedCategory);
        }
        // Aplica a ordenação selecionada
        filtered = sortProducts(filtered, selectedSort);
        setFilteredProducts(filtered);
        setCurrentPage(1); // Reseta para a primeira página após qualquer filtro ou ordenação
    }, [selectedCategory, selectedSort, randomizedProducts]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
                        <select
                            className="bg-white px-6 py-3 text-[#9F9F9F]"
                            value={selectedSort}
                            onChange={(e) => setSelectedSort(e.target.value)}
                        >
                            <option value="none">No Filter</option>
                            <option value="alphabetical">Alphabetical A-Z</option>
                            <option value="price-asc">lowest price</option>
                            <option value="price-desc">highest price</option>
                        </select>
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

                <div className={`flex flex-wrap items-center justify-center sm:justify-start gap-4 md:gap-6 pl-8 ${isFilterVisible ? 'md:w-3/4' : 'w-full'}`}>
                    {currentProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

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
