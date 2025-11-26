Book book = BookDB.getBook(id); req.setAttribute("book", book);
req.getRequestDispatcher("/pages/success.jsp").forward(req, resp); ```
:contentReference[oaicite:3]{index=3} So we can do the same trick: no
scriptlets, only EL. **Path:** `src/main/webapp/pages/success.jsp` > Again:
delete everything in the file and replace with this: ```jsp <%@ page
contentType="text/html;charset=UTF-8" %>
<jsp:include page="/pages/includes/header.jsp" />

<main class="site-container mb-4">
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <div class="detail-box text-center">
        <div style="font-size: 3rem; margin-bottom: 1rem">🎉</div>
        <h3>Purchase Successful!</h3>
        <p class="mb-3">Thank you — you purchased:</p>

        <p class="fw-bold">${book != null ? book.name : 'Unknown Book'}</p>

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
