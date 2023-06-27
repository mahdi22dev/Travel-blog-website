import africa from "./assets/africa.jpg";
import europe from "./assets/europe.jpg";
import americas from "./assets/americas.jpg";
import asia from "./assets/asia.jpg";

export const cards = [
  {
    id: 1,
    name: "Africa",
    card_text:
      "Discover the wild wonders of Africa, from the iconic Serengeti National Park to the captivating cultural heritage of Tanzania. Immerse yourself in the Great Migration, witness incredible wildlife encounters, and be mesmerized by the raw beauty of the African savannah.",
    image: africa,
  },
  {
    id: 2,
    name: "Europe",
    card_text:
      "Experience the timeless charm of Europe. From the sun-kissed beaches of Santorini to the enchanting streets of Paris, Europe beckons with its rich history, architectural marvels, and culinary delights.",
    image: europe,
  },
  {
    id: 3,
    name: "Asia",
    card_text:
      "Explore the mysteries of Asia. Delve into the ancient traditions of Kyoto, Japan, or immerse yourself in the vibrant streets of Tokyo. Experience the diverse landscapes, vibrant cultures, and spiritual retreats that make Asia an unforgettable destination.",
    image: asia,
  },
  {
    id: 4,
    name: "Americas",

    card_text:
      "Embark on a journey through the Americas. Marvel at the ancient ruins of Machu Picchu in Peru or soak up the sun on the golden beaches of Brazil. From the bustling cities of North America to the rich cultural heritage of Latin America, the Americas offer an array of captivating experiences.",
    image: americas,
  },
];
function getRandomText() {
  // Add your logic to generate random text here
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra tellus in hac habitasse platea dictumst. Vel pretium lectus quam id leo in vitae turpis. Aliquet lectus proin nibh nisl condimentum id. Tristique senectus et netus et. Ac ut consequat semper viverra nam libero justo laoreet. Ornare aenean euismod elementum nisi quis eleifend quam. Sagittis nisl rhoncus mattis rhoncus urna. Amet nulla facilisi morbi tempus iaculis urna id. Diam in arcu cursus euismod quis viverra nibh. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Tortor consequat id porta nibh venenatis cras sed felis. Ullamcorper eget nulla facilisi etiam dignissim. Quisque egestas diam in arcu cursus euismod quis viverra. Justo eget magna fermentum iaculis eu non diam phasellus. Fusce ut placerat orci nulla pellentesque. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Est ante in nibh mauris cursus mattis molestie a iaculis. Enim nulla aliquet porttitor lacus.";
}
export const blog_data = [
  {
    title: "THE BEST WALKING TOURS IN MEXICO CITY",
    image: "https://media.nomadicmatt.com/2023/mexicocitywalks.jpeg",
  },
  {
    title: "WHY YOU SHOULD TAKE A GROUP TOUR",
    image: "https://media.nomadicmatt.com/2023/tnngrouptours1.jpg",
  },
  {
    title:
      "WHERE TO STAY IN NEW ORLEANS: THE BEST NEIGHBORHOODS FOR YOUR VISIT",
    image: "https://media.nomadicmatt.com/2023/wheretostaynola.jpeg",
  },
  {
    title: "MY STEP-BY-STEP GUIDE TO BACKPACKING EUROPE",
    image: "https://media.nomadicmatt.com/2021/europesteps1.jpg",
  },

  {
    title: "THE 9 BEST TRAVEL APPS",
    image: "https://media.nomadicmatt.com/2023/travelapps.jpeg",
  },
  {
    title: "HOW MUCH DOES IT COST TO TRAVEL WESTERN EUROPE?",
    image: "https://media.nomadicmatt.com/costofparis.jpg",
  },
];

export const blogMain_data = [
  {
    title: "THE BEST WALKING TOURS IN MEXICO CITY",
    image: "https://media.nomadicmatt.com/2023/mexicocitywalks.jpeg",
  },
  {
    title: "WHY YOU SHOULD TAKE A GROUP TOUR",
    image: "https://media.nomadicmatt.com/2023/tnngrouptours1.jpg",
  },
  {
    title:
      "WHERE TO STAY IN NEW ORLEANS: THE BEST NEIGHBORHOODS FOR YOUR VISIT",
    image: "https://media.nomadicmatt.com/2023/wheretostaynola.jpeg",
  },
  {
    title: "MY STEP-BY-STEP GUIDE TO BACKPACKING EUROPE",
    image: "https://media.nomadicmatt.com/2021/europesteps1.jpg",
  },

  {
    title: "THE 9 BEST TRAVEL APPS",
    image: "https://media.nomadicmatt.com/2023/travelapps.jpeg",
  },

  {
    title: "Food Tour Review: My Experience Eating in Bologna",
    image:
      "https://www.nomadicmatt.com/wp-content/uploads/2023/06/bolognafood1-335x200.jpeg",
  },
  {
    title: "How to Spend 5 Days in Paris",
    image:
      "https://www.nomadicmatt.com/wp-content/uploads/2018/08/5daysinparis1-335x200.jpg",
  },

  {
    title: "GET OUR TRAVEL JOURNAL TO RECORD YOUR TRAVELS!",
    image: "https://media.nomadicmatt.com/2023/journal4.jpeg",
  },
];

export const destinations_Data = [
  {
    city: "Paris",
    country: "France",
    continent: "Europe",
    hotel_links: [
      "https://example.com/hotel1",
      "https://example.com/hotel2",
      "https://example.com/hotel3",
    ],
    tourist_count: 1000000,
    description:
      "Paris, the capital of France, is known as the City of Love. It offers stunning landmarks like the Eiffel Tower, world-class museums such as the Louvre, and charming neighborhoods like Montmartre. Experience the rich history, art, and culture while enjoying delectable French cuisine and the romantic atmosphere.",
  },
  {
    city: "Rome",
    country: "Italy",
    continent: "Europe",
    hotel_links: [
      "https://example.com/hotel4",
      "https://example.com/hotel5",
      "https://example.com/hotel6",
    ],
    tourist_count: 900000,
    description:
      "Rome, the Eternal City, is a treasure trove of ancient history. Visit iconic landmarks such as the Colosseum, Roman Forum, and Vatican City. Immerse yourself in the rich Roman culture, indulge in delicious Italian cuisine, and explore the vibrant streets and lively piazzas.",
  },
  {
    city: "New York City",
    country: "United States",
    continent: "North America",
    hotel_links: [
      "https://example.com/hotel7",
      "https://example.com/hotel8",
      "https://example.com/hotel9",
    ],
    tourist_count: 800000,
    description:
      "New York City, the city that never sleeps, is a global metropolis bursting with energy. Experience the iconic Statue of Liberty, Times Square, Central Park, and world-class museums. Enjoy Broadway shows, diverse culinary delights, and a vibrant nightlife scene.",
  },
  {
    city: "Tokyo",
    country: "Japan",
    continent: "Asia",
    hotel_links: [
      "https://example.com/hotel10",
      "https://example.com/hotel11",
      "https://example.com/hotel12",
    ],
    tourist_count: 700000,
    description:
      "Tokyo, the capital of Japan, seamlessly blends traditional and modern elements. Explore ancient temples, stroll through bustling markets, and witness futuristic technology. Indulge in authentic sushi, experience the vibrant nightlife of Shinjuku, and immerse yourself in Japanese culture.",
  },
  {
    city: "Cairo",
    country: "Egypt",
    continent: "Africa",
    hotel_links: [
      "https://example.com/hotel13",
      "https://example.com/hotel14",
      "https://example.com/hotel15",
    ],
    tourist_count: 600000,
    description:
      "Cairo, the capital of Egypt, is a city of wonders and ancient history. Visit the magnificent Pyramids of Giza, explore the Egyptian Museum, and sail along the Nile River. Immerse yourself in the bustling markets, taste traditional Egyptian cuisine, and discover the charm of this historical city.",
  },
  {
    city: "Sydney",
    country: "Australia",
    continent: "Australia",
    hotel_links: [
      "https://example.com/hotel16",
      "https://example.com/hotel16",
      "https://example.com/hotel17",
      "https://example.com/hotel18",
    ],
    tourist_count: 500000,
    description:
      "Sydney, the vibrant capital of Australia, offers a perfect blend of stunning natural landscapes and urban attractions. Marvel at the architectural marvel of the Sydney Opera House, relax at the beautiful beaches like Bondi and Manly, and explore the historic Rocks area. Enjoy water activities, world-class dining, and the laid-back Aussie lifestyle.",
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    continent: "South America",
    hotel_links: [
      "https://example.com/hotel19",
      "https://example.com/hotel20",
      "https://example.com/hotel21",
    ],
    tourist_count: 400000,
    description:
      "Rio de Janeiro, the marvelous city of Brazil, is renowned for its breathtaking landscapes and vibrant culture. Relax on the iconic Copacabana Beach, visit the magnificent Christ the Redeemer statue, and explore the charming neighborhoods of Santa Teresa and Ipanema. Experience the samba rhythms, enjoy panoramic views from Sugarloaf Mountain, and embrace the lively Carnival spirit.",
  },
  {
    city: "Marrakech",
    country: "Morocco",
    continent: "Africa",
    hotel_links: [
      "https://example.com/hotel22",
      "https://example.com/hotel23",
      "https://example.com/hotel24",
    ],
    tourist_count: 300000,
    description:
      "Marrakech, the cultural hub of Morocco, offers a mesmerizing blend of ancient traditions and vibrant markets. Explore the bustling souks of the Medina, visit the stunning Bahia Palace, and indulge in flavorful Moroccan cuisine. Experience the lively atmosphere of Jemaa el-Fnaa square, relax in beautiful riads, and immerse yourself in the colors and scents of the city's rich heritage.",
  },
  {
    city: "London",
    country: "United Kingdom",
    continent: "Europe",
    hotel_links: [
      "https://example.com/hotel25",
      "https://example.com/hotel26",
      "https://example.com/hotel27",
    ],
    tourist_count: 800000,
    description:
      "London, the capital of the United Kingdom, is a city steeped in history and modern charm. Explore iconic landmarks such as the Tower of London, Buckingham Palace, and the British Museum. Immerse yourself in the vibrant cultural scene, enjoy West End shows, and savor traditional afternoon tea.",
  },
  {
    city: "Barcelona",
    country: "Spain",
    continent: "Europe",
    hotel_links: [
      "https://example.com/hotel28",
      "https://example.com/hotel29",
      "https://example.com/hotel30",
    ],
    tourist_count: 600000,
    description:
      "Barcelona, the cosmopolitan capital of Catalonia, is known for its stunning architecture and vibrant atmosphere. Explore the architectural wonders of Antoni Gaudí, such as the Sagrada Familia and Park Güell. Stroll along the vibrant Las Ramblas, indulge in delicious tapas, and enjoy the Mediterranean beaches.",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    continent: "Asia",
    hotel_links: ["https://example.com/hotel31", "https://example.com/hotel "],
    tourist_count: 600000,
    description:
      "Barcelona, the cosmopolitan capital of Catalonia, is known for its stunning architecture and vibrant atmosphere. Explore the architectural wonders of Antoni Gaudí, such as the Sagrada Familia and Park Güell. Stroll along the vibrant Las Ramblas, indulge in delicious tapas, and enjoy the Mediterranean beaches.",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    continent: "Asia",
    hotel_links: [
      "https://example.com/hotel31",
      "https://example.com/hotel32",
      "https://example.com/hotel33",
    ],
    tourist_count: 900000,
    description:
      "Dubai, the glamorous city of the United Arab Emirates, is a symbol of luxury and innovation. Marvel at the towering Burj Khalifa, explore the extravagant Palm Jumeirah, and indulge in world-class shopping at Dubai Mall. Experience desert safaris, visit traditional souks, and enjoy exquisite dining experiences.",
  },
  {
    city: "Prague",
    country: "Czech Republic",
    continent: "Europe",
    hotel_links: [
      "https://example.com/hotel34",
      "https://example.com/hotel35",
      "https://example.com/hotel36",
    ],
    tourist_count: 500000,
    description:
      "Prague, the enchanting capital of the Czech Republic, is known for its stunning architecture and rich history. Explore the Prague Castle, stroll across the iconic Charles Bridge, and wander through the charming streets of the Old Town. Experience the vibrant nightlife, taste delicious Czech beer, and immerse yourself in the city's fairy tale-like ambiance.",
  },
  {
    city: "Bali",
    country: "Indonesia",
    continent: "Asia",
    hotel_links: [
      "https://example.com/hotel37",
      "https://example.com/hotel38",
      "https://example.com/hotel39",
    ],
    tourist_count: 700000,
    description:
      "Bali, the tropical paradise of Indonesia, offers stunning beaches, lush rice terraces, and a rich cultural heritage. Visit ancient temples like Uluwatu and Tanah Lot, relax on pristine beaches like Kuta and Seminyak, and explore the artistic town of Ubud. Experience vibrant festivals, indulge in Balinese cuisine, and rejuvenate your senses in this island oasis.",
  },
  {
    city: "Vienna",
    country: "Austria",
    continent: "Europe",
    hotel_links: [
      "https://example.com/hotel40",
      "https://example.com/hotel41",
      "https://example.com/hotel42",
    ],
    tourist_count: 400000,
    description:
      "Vienna, the elegant capital of Austria, is renowned for its rich history, stunning architecture, and classical music heritage. Explore the grand Schönbrunn Palace, visit the majestic St. Stephen's Cathedral, and enjoy the enchanting melodies of the Vienna Philharmonic Orchestra. Immerse yourself in the city's coffeehouse culture and indulge in delicious Viennese pastries.",
  },
  {
    city: "Cape Town",
    country: "South Africa",
    continent: "Africa",
    hotel_links: [
      "https://example.com/hotel46",
      "https://example.com/hotel47",
      "https://example.com/hotel48",
    ],
    tourist_count: 600000,
    description:
      "Cape Town, located at the southern tip of South Africa, is a city of stunning natural beauty and cultural diversity. Visit iconic landmarks such as Table Mountain and Cape Point, explore the vibrant V&A Waterfront, and relax on the beautiful beaches of Camps Bay. Experience the rich history of Robben Island, taste South African wines in the nearby Winelands, and enjoy the lively atmosphere of the city's markets and nightlife.",
  },
  {
    city: "Havana",
    country: "Cuba",
    continent: "North America",
    hotel_links: [
      "https://example.com/hotel49",
      "https://example.com/hotel50",
      "https://example.com/hotel51",
    ],
    tourist_count: 500000,
    description:
      "Havana, the capital of Cuba, is a city frozen in time, with its vibrant colors, classic cars, and lively music scene. Stroll through the historic streets of Old Havana, visit the impressive Plaza de la Catedral, and experience the iconic Malecón. Immerse yourself in Cuban culture, dance to the rhythms of salsa and rumba, and enjoy the flavorful cuisine and famous Cuban cigars.",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    continent: "Asia",
    hotel_links: [
      "https://example.com/hotel52",
      "https://example.com/hotel53",
      "https://example.com/hotel54",
    ],
    tourist_count: 900000,
    description:
      "Bangkok, the bustling capital of Thailand, is a city of contrasts, blending ancient temples with modern skyscrapers. Explore the ornate Grand Palace, visit the serene Wat Arun, and take a boat ride along the Chao Phraya River. Experience the vibrant street markets, indulge in delicious Thai street food, and discover the city's vibrant nightlife.",
  },
];
