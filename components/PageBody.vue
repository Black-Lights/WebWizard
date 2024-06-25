<template>
  <div class="page-body">
    <!-- Picture Box Section -->
    <div class="picture-box">
      <img src="/path/to/your/image.jpg" alt="Image" class="picture" />
    </div>

    <!-- Content Section -->
    <div class="content">
      <h2>Title of the Page</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac urna id
        nisi viverra ullamcorper. Sed at mauris magna. Cras sed neque eget odio
        scelerisque vehicula. Proin euismod, neque ac gravida bibendum, mi augue
        tristique orci, ut convallis tortor tortor et odio.
      </p>

      <!-- Links to Other Pages in the Category -->
      <div class="category-links">
        <h3>More Pages in This Category</h3>
        <ul>
          <li><NuxtLink to="/category/page1">Page 1</NuxtLink></li>
          <li><NuxtLink to="/category/page2">Page 2</NuxtLink></li>
          <li><NuxtLink to="/category/page3">Page 3</NuxtLink></li>
          <!-- Add more links as needed -->
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-body {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Adjust alignment as needed */
  padding: 2rem;
}

.picture-box {
  flex: 1; /* Take 50% of the available space */
  margin-right: 2rem; /* Space between picture box and content */
}

.picture {
  width: 100%; /* Ensure the image takes full width of its container */
  border-radius: 8px; /* Optional: Rounded corners for the image */
}

.content {
  flex: 2; /* Take 50% of the available space */
}

.category-links {
  margin-top: 1.5rem;
}

.category-links h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

ul li {
  margin-bottom: 0.5rem;
}

ul li a {
  text-decoration: none;
  color: #1abc9c;
}

ul li a:hover {
  text-decoration: underline;
}
</style>
