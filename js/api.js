async function loadUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    // console.log(data)
    data.forEach(element => {
        console.log(element.name)
    });
}

loadUsers()


// // async/await style (beautiful)
// // async function getGitHubUser() {
// //   try {
// //     const userRes = await fetch('https://api.github.com/users/joshuainfluence');
// //     const user = await userRes.json();
    
// //     console.log(user.name);
    
// //     const reposRes = await fetch(user.repos_url);
// //     const repos = await reposRes.json();
    
// //     console.log('Repos:', repos.length);
// //   } catch (err) {
// //     console.error(err);
// //   }
// // }
// // getGitHubUser();

// async function getGitHubUser() {
//   try {
//     const userRes = await fetch('https://api.github.com/users');
//     const user = await userRes.json();
    
//     console.log(user);
    
  
//   } catch (err) {
//     console.error(err);
//   }
// }
// getGitHubUser();


// // async function createPost() {
// //   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({ title: "New Post", body: "Hello world!" })
// //   });

// //   const data = await response.json();
// //   console.log(data);
// // }
// // createPost();



// // const apiKey = '077459c42bd91642bd8d0a518043d835'; // Your key is valid!

// // async function getWeather(city) {
// //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // added units=metric for °C

// //   try {
// //     const response = await fetch(url);

// //     // First, check if the HTTP status is OK
// //     if (!response.ok) {
// //       const errorData = await response.json();
// //       throw new Error(errorData.message || `HTTP ${response.status}`);
// //     }

// //     const data = await response.json();

// //     // Double-check that weather array exists (extra safety)
// //     if (!data.weather || data.weather.length === 0) {
// //       throw new Error('No weather data returned');
// //     }

// //     // Now it's safe to access
// //     console.log(`Weather in ${data.name}, ${data.sys.country}:`);
// //     console.log(`   ${data.weather[0].description}`);
// //     console.log(`   Temperature: ${data.main.temp}°C`);
// //     console.log(`   Feels like: ${data.main.feels_like}°C`);
// //     console.log(`   Humidity: ${data.main.humidity}%`);

// //   } catch (error) {
// //     if (error.message.includes('city not found')) {
// //       console.error(`City "${city}" not found. Please check spelling.`);
// //     } else {
// //       console.error('Error fetching weather:', error.message);
// //     }
// //   }
// // }

// // // Test it!
// // getWeather('London');
// // getWeather('Paris');
// // getWeather('New York');
// // getWeather('InvalidCityName123'); // This will now show a friendly message