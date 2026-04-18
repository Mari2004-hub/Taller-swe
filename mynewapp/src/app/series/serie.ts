export class Serie {
  id: number;
  name: string;
  description: string;
  image: string;
  channel: string;
  seasons: number;

  constructor(
    id: number,
    name: string,
    description: string,
    image: string,
    channel: string,
    seasons: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.channel = channel;
    this.seasons = seasons;
  }
}
