<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Bookstore</title>

    <!-- Bootstrap 5 CDN -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />

    <!-- Custom CSS -->
    <link
      rel="stylesheet"
      href="${pageContext.request.contextPath}/resources/styles.css"
    />
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container site-container">
        <a
          class="navbar-brand"
          href="${pageContext.request.contextPath}/listBooks"
          >📚 Bookstore</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navcollapse"
          aria-controls="navcollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navcollapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                href="${pageContext.request.contextPath}/listBooks"
                >Books</a
              >
            </li>
            <li class="nav-item"><a class="nav-link" href="#">About</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <header class="header-hero">
      <div class="site-container">
        <h1>Welcome to the Bookstore</h1>
        <p>Your one-stop shop for all the books you love.</p>
      </div>
    </header>

  </body>
</html>
