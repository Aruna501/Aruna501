// Like the any type, you can assign any value to a variable of the unknown type. 
let result: unknown;

result = 1;
result = 'hello';
result = false;
result = Symbol();
result = { name: 'John' };
result = [1, 2, 3];
console.log(result);

let resultss: unknown;
resultss = [1,2,3];

const total = (resultss as number[]).reduce((a: number, b:number ) => a + b, 0);
console.log(total);

// The unknown type is like any type but more restrictive.
// Use the unknown type to handle data coming from external sources and requires validation before use.

const fetchData = async (url: string): Promise<unknown> => {
    const response = await fetch(url);
    return await response.json();
  };
  
  const showPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
      const posts = await fetchData(url); // unknown type
  
      (
        posts as { userId: number; id: number; title: string; body: string }[]
      ).map((post) => console.log(post.title));
    } catch (err) {
      console.log(err);
    }
  };
  
  showPosts();
  