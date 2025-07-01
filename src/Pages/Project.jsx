import React,{useState , useEffect} from 'react'

function Project() {
  
   const GITHUB_USERNAME = "HamzaSajjad01";
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
  
      useEffect(() => {
      const fetchRepos = async () => {
        try {
          const res = await fetch(`
            https://api.github.com/users/${GITHUB_USERNAME}/repos
          `);
          const data = await res.json();
          setRepos(data);
          setLoading(false);
        } catch (error) {
          console.error("Failed to fetch repos:", error);
          setLoading(false);
        }
      };
  
      fetchRepos();
    }, []);
    
  
return (
  <section
  id="projects"
  className="bg-blue-100 dark:bg-black text-black dark:text-white py-16 px-4 md:px-8 transition-colors duration-500"
>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center">
      Featured <span className="text-[#00BFFF]">Projects</span>
    </h2>
    <p className="text-center text-gray-700 dark:text-gray-400 mb-12 text-lg">
      Explore a selection of full-stack applications built with performance and scalability in mind.
    </p>

    {loading ? (
      <p className="text-center text-gray-500 dark:text-gray-300">Loading projects...</p>
    ) : (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white dark:bg-[#132034] rounded-xl p-6 md:p-8 min-h-[260px] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-4">
              {repo.name}
            </h3>

            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-5 line-clamp-3">
              {repo.description || "No description available."}
            </p>

            {repo.topics?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {repo.topics.map((topic, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-auto flex space-x-4 pt-4">
              {repo.homepage && repo.homepage !== "" && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00BFFF] font-medium hover:underline"
                  
                >
                  Live Demo
                </a>
              )}
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 font-medium hover:underline"
              >
                GitHub
              </a>
              {console.log(repo.html_url)}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</section>

  )
}

export default Project