
function explore() {

  document.getElementById("message").textContent 
  = "Welcome to Kheperas Universeal!";
} 

const topics = [
  {
    title: "Imhotep",
    categories: "Kemet",
    description: "An important figure in ancient Egyptian history.",
    link: "articles/ imhotep.html"
    
  
  },

  {
    title: "Solar System",
    categories: "Universe",
    description: "The Sun and object that obit it ."
  },

  {
    title: "Javascript", 
    categories: "Technology",
    description:"programming language used to make website interactive."
    
  },

  {
    title: "Web Development",
    categories: "Technology",
    description: "The process of creating web sites and web application."
  },

  {
    title: "Science",
    categories: "Knowledge",
    description: "The systemetic study of the natural world."
  }

];

function searchContent() {

  const input = 
    document.getElementById("searchInput").value  .toLowerCase();

  const results = 
    document.getElementById("searchResults");

  results.innerHTML = ""; 

  if (input === "") {
    return;
  }

  const found = 
    topics.filter(function(topic){

      return (
    
        topic.title.toLowerCase().includes(input) ||

        topic.categories.toLowerCase().includes(input)
        
      );

      
    });

  if (found.length === 0) {

    results.innerHTML = 
      "<div class='result'>No results found.</div>";

    return;
  }

  found.forEach(function(topic) {

    results.innerHTML += `
    <div class="result">
    <h3>
    <a href="${topic.link}">
    ${topic.title}
    </a>
    </h3>
    
    <strong>${topic.category}</strong>
    <p>${topic.description}</p>
    </div>
    `;
  });
    

}