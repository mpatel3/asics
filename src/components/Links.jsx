const Links = ({title, links}) => {
  return (
    <div className="flex flex-col">
        <h3 className="text-white text-2xl leading-normal font-medium mb-6">
            {title}
        </h3>
        <div className="flex flex-col">
            {
                links.map((link) => (
                    <h2 key={link.name} className="mt-3 text-base text-white-400 font-montserrat leading-normal hover:text-slate-gray cursor-pointer">
                        <a href={link.link}>{link.name}</a>
                    </h2>
                ))
            }
        </div>
    </div>
  )
}

export default Links