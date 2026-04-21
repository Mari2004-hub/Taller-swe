export class Serie {
  id: number;
  name: string;
  description: string;
  image: string;
  channel: string;
  seasons: number;
  poster: string;
  webpage: string;

  constructor(
    id: number,
    name: string,
    description: string,
    image: string,
    channel: string,
    seasons: number,
    poster: string,
    webpage: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.channel = channel;
    this.seasons = seasons;
    this.poster = poster;
    this.webpage = webpage;
  }
}

