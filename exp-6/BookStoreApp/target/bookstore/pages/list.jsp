<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="/pages/includes/header.jsp" />

<main class="site-container mb-4">
  <div class="row row-books">
    <%
      java.util.Collection<com.example.bookstore.Book> books =
        (java.util.Collection<com.example.bookstore.Book>)request.getAttribute("books");
      if (books == null || books.isEmpty()) {
    %>
      <div class="col-12 empty">
        <h4>No books available</h4>
        <p>Please check back later.</p>
      </div>
    <% } else { %>

      <!-- grid: show 3 cards per row on md+, 1 on xs -->
      <div class="row row-cols-1 row-cols-md-3 g-4">
      <%
        for (com.example.bookstore.Book b : books) {
      %>
        <div class="col">
          <div class="card card-book h-100">
            <div class="book-image"></div>
            <div class="card-body d-flex flex-column">
              <div class="mb-2">
                <div class="book-title"><a href="${pageContext.request.contextPath}/book?id=<%=b.getId()%>"><%= b.getName() %></a></div>
                <div class="book-id">ID: <%= b.getId() %></div>
              </div>

              <div class="mt-auto d-flex justify-content-between align-items-center">
                <a class="btn btn-sm btn-accent" href="${pageContext.request.contextPath}/book?id=<%=b.getId()%>">View</a>
                <form action="${pageContext.request.contextPath}/purchase" method="post">
                  <input type="hidden" name="id" value="<%= b.getId() %>"/>
                  <button class="btn btn-primary btn-sm" type="submit">Buy</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      <% } %>
      </div>
    <% } %>
  </div>
</main>

<jsp:include page="/pages/includes/footer.jsp" />
