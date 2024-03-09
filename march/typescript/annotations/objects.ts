const profile = {
  name: "alex",
  age: 23,
  coords: {
    lat: 0,
    lng: 34,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const {
  age,
  coords: { lat, lng },
}: { age: number; coords: { lat: number; lng: number } } = profile;
