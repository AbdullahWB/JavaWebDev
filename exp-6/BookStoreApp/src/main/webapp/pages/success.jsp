<%@ page contentType="text/html;charset=UTF-8" language="java" import="com.example.bookstore.Book" %>
<%
    // Get the Book object that PurchaseServlet put into the request
    Book book = (Book) request.getAttribute("book");
%>

<jsp:include page="/pages/includes/header.jsp" />

<main class="site-container mb-4">
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <div class="detail-box text-center">
        <div style="font-size: 3rem; margin-bottom: 1rem">🎉</div>
        <h3>Purchase Successful!</h3>
        <p class="mb-3">Thank you — you purchased:</p>
        <p class="fw-bold">
          <%= (book == null) ? "Unknown Book" : book.getName() %>
        </p>

        <a
          class="btn btn-primary mt-3"
          href="${pageContext.request.contextPath}/listBooks"
        >
          Continue browsing
        </a>
      </div>
    </div>
  </div>
</main>

<jsp:include page="/pages/includes/footer.jsp" />
