export function BlogCard({blog, className}){

    return (
        <div>
         <div className={"blogCard " + className} key={blog.id}>
                <h1>{blog.title}</h1>
                <img className="responsiveImage" src={blog.imageUrl} alt={blog.title} />
                <h1>{blog.authorName}</h1>
                <h1>{blog.publishedDate}</h1>
            </div>
        </div>
      );
}