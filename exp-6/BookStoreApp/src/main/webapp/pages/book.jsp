<%@ page contentType="text/html;charset=UTF-8" %>
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
            <!-- Title -->
            <h3>${book != null ? book.name : 'Book not found'}</h3>

            <!-- ID -->
            <p class="text-muted">ID: ${book != null ? book.id : 'N/A'}</p>

            <!-- Description -->
            <p>
              <strong>Description:</strong><br />
              This is a demo description for "<span
                >${book != null ? book.name : ''}</span
              >". Replace with real content as needed.
            </p>

            <!-- Purchase form -->
            <div class="mt-4">
              <form
                action="${pageContext.request.contextPath}/purchase"
                method="post"
              >
                <input
                  type="hidden"
                  name="id"
                  value="${book != null ? book.id : ''}"
                />
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
