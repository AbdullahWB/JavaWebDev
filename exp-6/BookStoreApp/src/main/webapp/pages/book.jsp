<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="/pages/includes/header.jsp" />

<main class="site-container mb-4">
  <div class="row justify-content-center">
    <div class="col-12 col-md-10">
      <div class="detail-box">
        <div class="row">
          <div class="col-md-4">
            <div class="book-image"></div>
          </div>
          <div class="col-md-8">
            <h3>
              <%= book == null ? "Book not found" : book.getName() %>
            </h3>
            <p class="text-muted">ID: <%= book == null ? "N/A" : book.getId() %></p>

            <p>
              <strong>Description:</strong><br />
              This is a demo description for "<%= book == null ? "" : book.getName()
              %>". Replace with real content as needed.
            </p>

            <div class="d-flex gap-2 mt-4">
              <a
                class="btn btn-outline-secondary"
                href="${pageContext.request.contextPath}/listBooks"
                >Back to list</a
              >

              <form
                action="${pageContext.request.contextPath}/purchase"
                method="post"
              >
                <input type="hidden" name="id" value="<%= book == null ? "" :
                book.getId() %>"/>
                <button class="btn btn-primary" type="submit">Purchase</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<jsp:include page="/pages/includes/footer.jsp" />
