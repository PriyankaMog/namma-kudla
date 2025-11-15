// Blog Data
const blogs = [
    {
        title: "A Beautiful Evening at Panambur Beach",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/f9/ef/d3/beautiful-sunset.jpg?w=900&h=500&s=1",
        desc: "Panambur Beach offers stunning sunsets, clean shores and a peaceful atmosphere. A must-visit for evening walks and relaxation."
    },
    {
        title: "Exploring Pilikula Heritage Village",
        img: "https://content3.jdmagicbox.com/comp/mangalore/j6/0824px824.x824.220129214705.r2j6/catalogue/guthu-house-pilikula-heritage-village-moodushedde-mangalore-museums-hV5efl8HfW.jpg",
        desc: "Pilikula has a beautiful blend of culture, nature and science. The artisan village and 3D planetarium give a unique experience."
    },
    {
        title: "Kadri Temple – A Place of Peace",
        img: "https://avathioutdoors.gumlet.io/travelGuide/dev/mangalore_P5043.jpg",
        desc: "Kadri Manjunatha Temple is surrounded by greenery and sacred ponds, offering a calm and spiritual environment."
    }
];

// Display blogs
function loadBlogs() {
    const container = document.getElementById("blogList");

    blogs.forEach(blog => {
        const html = `
            <div class="blog-box">
                <img src="${blog.img}">
                <h2>${blog.title}</h2>
                <p>${blog.desc}</p>
            </div>
        `;
        container.innerHTML += html;
    });
}

loadBlogs();

function filterBlogs(category) {
  var blogs = document.querySelectorAll(".blog-card");
  var buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(function(btn) {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");

  blogs.forEach(function(blog) {
    if (category === "all") {
      blog.style.display = "block";
    } else if (blog.getAttribute("data-category") === category) {
      blog.style.display = "block";
    } else {
      blog.style.display = "none";
    }
  });
}

window.addEventListener("load", function() {
  var firstBtn = document.querySelector(".filter-btn");
  if (firstBtn) {
    firstBtn.classList.add("active");
  }
});