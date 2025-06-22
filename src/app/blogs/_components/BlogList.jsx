import BlogCard from "./BlogCard"

export default function BlogList({ data }) {
  return (
    <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-4 md:gap-4">
      {data.map((items) => (
        <div className="min-w-[250px] flex-shrink-0 md:min-w-0" key={items.id}>
          <BlogCard data={items} />
        </div>
      ))}
    </div>
  )
}
