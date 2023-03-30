// Type annotation for countryPopulation variable
const countryPopulation: {
  code: string;
  population: number;
} = {
  code: "NZ",
  population: 5_135_300,
};

// Country interface definition
interface Country {
  name: string;
  code: string;
  population: number;
}

// Country type annotation for countryData variable
const countryData: Country = {
  name: "India",
  code: "IN",
  population: 1_352_642_280,
};

// Currency type alias definition
type Currency = {
  name: string;
  code: string;
  symbol: string;
};

// Currency type annotation for currencyData variable
const currencyData: Currency = {
  name: "Euro",
  code: "EUR",
  symbol: "€",
};

// Export statement to avoid the error: "Cannot redeclare block-scoped variable 'name'."
export {};
