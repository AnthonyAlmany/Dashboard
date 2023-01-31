interface City {
    city: string;
    country: string;
}

const citiesList: City[] = [
    { city: "New York City", country: "USA" },
    { city: "London", country: "UK" },
    { city: "Paris", country: "France" },
    { city: "Tokyo", country: "Japan" },
    { city: "Moscow", country: "Russia" },
    { city: "Beijing", country: "China" },
    { city: "Shanghai", country: "China" },
    { city: "Los Angeles", country: "USA" },
    { city: "Mumbai", country: "India" },
    { city: "Sydney", country: "Australia" },
    { city: "Istanbul", country: "Turkey" },
    { city: "Dubai", country: "UAE" },
    { city: "Rome", country: "Italy" },
    { city: "Singapore", country: "Singapore" },
    { city: "Barcelona", country: "Spain" },
    { city: "Amsterdam", country: "Netherlands" },
    { city: "Seoul", country: "South Korea" },
    { city: "Berlin", country: "Germany" },
    { city: "Hong Kong", country: "China" },
    { city: "Vienna", country: "Austria" },
    { city: "Madrid", country: "Spain" },
    { city: "Rio de Janeiro", country: "Brazil" },
    { city: "Johannesburg", country: "South Africa" },
    { city: "Athens", country: "Greece" },
    { city: "Warsaw", country: "Poland" },
    { city: "Montreal", country: "Canada" },
    { city: "Chicago", country: "USA" },
    { city: "Toronto", country: "Canada" },
    { city: "Mexico City", country: "Mexico" },
    { city: "San Francisco", country: "USA" },
    { city: "Moscow", country: "Russia" },
    { city: "Cairo", country: "Egypt" },
    { city: "Milan", country: "Italy" },
    { city: "St. Petersburg", country: "Russia" },
    { city: "Buenos Aires", country: "Argentina" },
    { city: "Prague", country: "Czech Republic" },
    { city: "Budapest", country: "Hungary" },
    { city: "Brussels", country: "Belgium" },
    { city: "Rio de Janeiro", country: "Brazil" },
    { city: "Warsaw", country: "Poland" },
    { city: "Miami", country: "USA" },
    { city: "Lima", country: "Peru" },
    { city: "Mumbai", country: "India" },
    { city: "New Orleans", country: "USA" },
    { city: "Osaka", country: "Japan" },
    { city: "Helsinki", country: "Finland" },
    { city: "Manila", country: "Philippines" },
    { city: "Jakarta", country: "Indonesia" },
    { city: "Tehran", country: "Iran" },
    { city: "Bangkok", country: "Thailand" },
    { city: "Santiago", country: "Chile" },
    { city: "Caracas", country: "Venezuela" },
    { city: "Dubai", country: "UAE" },
    { city: "Cape Town", country: "South Africa" },
    { city: "Houston", country: "USA" },
    { city: "Casablanca", country: "Morocco" },
    { city: "Dallas", country: "USA" },
    { city: "Hamburg", country: "Germany" },
    { city: "Lyon", country: "France" },
    { city: "Edinburgh", country: "UK" },
    { city: "Rotterdam", country: "Netherlands" },
    { city: "Belfast", country: "UK" },
    { city: "Birmingham", country: "UK" },
    { city: "Nice", country: "France" },
    { city: "Krakow", country: "Poland" },
    { city: "Bristol", country: "UK" },
    { city: "Belo Horizonte", country: "Brazil" },
    { city: "Glasgow", country: "UK" },
    { city: "Bordeaux", country: "France" },
    { city: "Manchester", country: "UK" },
    { city: "Stuttgart", country: "Germany" },
    { city: "Lyon", country: "France" },
    { city: "Valencia", country: "Spain" },
    { city: "Leeds", country: "UK" },
    { city: "Leicester", country: "UK" },
    { city: "Birmingham", country: "UK" },
    { city: "Montpellier", country: "France" },
    { city: "Marseille", country: "France" },
    { city: "Bremen", country: "Germany" },
    { city: "Leicester", country: "UK" },
    { city: "Bristol", country: "UK" },
    { city: "Sheffield", country: "UK" },
    { city: "Liverpool", country: "UK" },
    { city: "Newcastle", country: "UK" },
    { city: "Nottingham", country: "UK" },
    { city: "Portsmouth", country: "UK" },
    { city: "Southampton", country: "UK" },
    { city: "Genoa", country: "Italy" },
    { city: "Florence", country: "Italy" },
    { city: "Turin", country: "Italy" },
    { city: "Bologna", country: "Italy" },
    { city: "Naples", country: "Italy" },
    { city: "Venice", country: "Italy" },
    { city: "Palermo", country: "Italy" },
    { city: "Catania", country: "Italy" },
    { city: "Bari", country: "Italy" },
    { city: "Trieste", country: "Italy" },
]

export default citiesList;

// const citiesList = [
//     { city: 'New York City', country: 'USA' },
//     { city: 'London', country: 'UK' },
//     { city: 'Paris', country: 'France' },
//     { city: 'Tokyo', country: 'Japan' },
//     { city: 'Moscow', country: 'Russia' },
//     { city: 'Beijing', country: 'China' },
//     { city: 'Shanghai', country: 'China' },
//     { city: 'Los Angeles', country: 'USA' },
//     { city: 'Mumbai', country: 'India' },
//     { city: 'Sydney', country: 'Australia' },
//     { city: 'Istanbul', country: 'Turkey' },
//     { city: 'Dubai', country: 'UAE' },
//     { city: 'Rome', country: 'Italy' },
//     { city: 'Singapore', country: 'Singapore' },


//     { city: 'Barcelona', country: 'Spain' },


//     { city: 'Amsterdam', country: 'Netherlands' },


//     { city: 'Seoul', country: 'South Korea' },


//     { city: 'Berlin', country: 'Germany' },


//     { city: 'Hong Kong', country: 'China' },


//     { city: 'Vienna', country: 'Austria' },


//     { city: 'Madrid', country: 'Spain' },


//     { city: 'Rio de Janeiro', country: 'Brazil' },


//     { city: 'Johannesburg', country: 'South Africa' },


//     { city: 'Athens', country: 'Greece' },


//     { city: 'Warsaw', country: 'Poland' },


//     { city: 'Montreal', country: 'Canada' },


//     { city: 'Chicago', country: 'USA' },


//     { city: 'Toronto', country: 'Canada' },


//     { city: 'Mexico City', country: 'Mexico' },


//     { city: 'San Francisco', country: 'USA' },


//     { city: 'Cairo', country: 'Egypt' },


//     { city: 'Milan', country: 'Italy' },


//     { city: 'St. Petersburg', country: 'Russia' },


//     { city: 'Buenos Aires', country: 'Argentina' },


//     { city: 'Prague', country: 'Czech Republic' },


//     { city: 'Budapest', country: 'Hungary' },


//     { city: 'Brussels', country: 'Belgium' },


//     { city: 'Miami', country: 'USA' },


//     { city: 'Lima', country: 'Peru' },


//     { city: 'New Orleans', country: 'USA' },


//     { city: 'Osaka', country: 'Japan' },

//     { city: 'Helsinki', country: 'Finland' },


//     { city: 'Manila', country: 'Philippines' },


//     { city: 'Jakarta', country: 'Indonesia' },


//     { city: 'Tehran', country: 'Iran' },


//     { city: 'Bangkok', country: 'Thailand' },


//     { city: 'Santiago', country: 'Chile' },


//     { city: 'Caracas', country: 'Venezuela' },


//     { city: 'Cape Town', country: 'South Africa' },


//     { city: 'Houston', country: 'USA' },


//     { city: 'Casablanca', country: 'Morocco' },


//     { city: 'Dallas', country: 'USA' },


//     { city: 'Hamburg', country: 'Germany' },


//     { city: 'Lyon', country: 'France' },


//     { city: 'Edinburgh', country: 'UK' },


//     { city: 'Rotterdam', country: 'Netherlands' },


//     { city: 'Belfast', country: 'UK' },


//     { city: 'Birmingham', country: 'UK' },
//     { city: 'Nice', country: 'France' },
//     { city: 'Krakow', country: 'Poland' },
//     { city: 'Bristol', country: 'UK' },
//     { city: 'Belo Horizonte', country: 'Brazil' },
//     { city: 'Glasgow', country: 'UK' },
//     { city: 'Bordeaux', country: 'France' },
//     { city: 'Manchester', country: 'UK' },
//     { city: 'Stuttgart', country: 'Germany' },
//     { city: 'Valencia', country: 'Spain' },
//     { city: 'Leeds', country: 'UK' },
//     { city: 'Leicester', country: 'UK' },
//     { city: 'Montpellier', country: 'France' },
//     { city: 'Marseille', country: 'France' },
//     { city: 'Bremen', country: 'Germany' },
//     { city: 'Sheffield', country: 'UK' },
//     { city: 'Liverpool', country: 'UK' },
//     { city: 'Newcastle', country: 'UK' },
//     { city: 'Nottingham', country: 'UK' },
//     { city: 'Portsmouth', country: 'UK' },
//     { city: 'Southampton', country: 'UK' },
//     { city: 'Genoa', country: 'Italy' },
//     { city: 'Florence', country: 'Italy' },
//     { city: 'Turin', country: 'Italy' },
//     { city: 'Bologna', country: 'Italy' },
//     { city: 'Naples', country: 'Italy' },
//     { city: 'Venice', country: 'Italy' },
//     { city: 'Palermo', country: 'Italy' },
//     { city: 'Catania', country: 'Italy' },
//     { city: 'Bari', country: 'Italy' },
//     { city: 'Trieste', country: 'Italy' },
// ]

