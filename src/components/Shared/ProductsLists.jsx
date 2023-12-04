import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";
import "../../Pages/Page.css";
import ProductCard from "../../components/Common/ProductCard";
import Rating from "../../components/Common/Rating";
import SectionHeader from "../../components/Common/SectionHeader";
// import { getProductsApiHandler } from "../../Utils/Axios";

function ProductLists() {
  let productsArray = [];
  const { section } = useParams();
  const { state } = useAppContext();
  // const [products, setProducts] = useState([]);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(productsArray.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(totalPages); // Set to -1 when there are no products

  // useEffect(() => {
  //   (async () => {
  //     const response = await getProductsApiHandler(currentPage, itemsPerPage);
  //      response.data.data);
  //     setProducts(response.data);
  //   })();
  // }, [currentPage]);

  // Determine the products array based on the section and category

  if (section === "todays-sales") {
    productsArray = state.todaysSales;
  } else if (section === "best-selling-products") {
    productsArray = state.bestSellingProducts;
  } else if (section === "our-products") {
    productsArray = state.ourProducts;
  } else if (section === "new-arrivals") {
    productsArray = state.newArrivals;
  } else {
    // Filter products by category
    productsArray = state.products.filter(
      (product) => product.category === section
    );
  }

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = productsArray.slice(startIndex, endIndex);

  // Define a dynamic title based on the section and category
  let title = "Explore Products";
  if (section) {
    title = section.split("-").join(" ");
  }

  return (
    <>
      <section className="product-section">
        <div className="product-header">
          <SectionHeader title={title} subtitle={`Explore ${title}`} />
        </div>
        <div className="product-list">
          {displayedProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                {...product}
                showDiscount={false}
                cardFor={"Our Products"}
              >
                <Rating rating={product.rating} reviews={product.review} />
              </ProductCard>
            );
          })}
        </div>
      </section>
      <hr />
      {totalPages >= 1 && ( // Only display pagination when there's more than one page
        <div className="pagination">
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={2}
            marginPagesDisplayed={4}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName="active"
            pageClassName="page"
            previousLabel="<"
            previousClassName="page"
            previousLinkClassName="page-link"
            nextLabel=">"
            nextClassName="page"
            nextLinkClassName="page-link"
            breakLabel="..."
            disableInitialCallback={true}
            breakClassName="break"
            pageLinkClassName="page-link"
          />
        </div>
      )}
    </>
  );
}

export default ProductLists;
