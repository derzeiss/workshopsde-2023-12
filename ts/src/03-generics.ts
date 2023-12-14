// Try to create a generic type for the table to avoid to repeat yourself

interface Table<T> {
  head: (keyof T)[];
  body: T[];
}

interface User {
  name: string;
  mail: string;
  city: string;
}

interface News {
  headline: string;
  text: string;
}

const UserTable: Table<User> = {
  head: ["name", "mail", "city"],
  body: [
    {
      name: "Ben",
      mail: "ben@workshops.de",
      city: "Hamburg",
    },
    {
      name: "Lisa",
      mail: "lisa@workshops.de",
      city: "Berlin",
    },
  ],
};

const NewsTable: Table<News> = {
  head: ["headline", "text"],
  body: [
    {
      headline: "A headline ",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      headline: "A second headline",
      text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ",
    },
  ],
};
