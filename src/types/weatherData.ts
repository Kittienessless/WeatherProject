export type parts  = "morning" | "day" | "evening" | "night" ;

export type WeatherData = {
  time?: string;
  cloudiness?: string;
  humidity?: string;
  precType?: string;
  precStrength?: string;
  pressure?: string;
  temperature?: string;
  fahrenheit?: string;
  windSpeed?: string;
  windDirection?: string;
  parts?:  parts;
};



