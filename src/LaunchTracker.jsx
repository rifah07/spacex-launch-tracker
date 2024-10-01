import { useState, useEffect } from "react";

const SpaceX_API_URL = "https://api.spacexdata.com/v4/launches";

function LaunchTracker() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const launchesPerPage = 10;

  useEffect(() => {
    fetch(SpaceX_API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setLaunches(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      }, []);
  });

  return (
    <div>
      <h1>SpaceX launch Tracker</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {launches.map((launch) => (
          <li key={launch.id}>
            <h2>{launch.name}</h2>
            <p>Date: {new Date(launch.data_utc).toLocaleDateString()}</p>
            <p>Rocket: {launch.rocket}</p>
            <p>Launch Site: {launch.launchpad}</p>
            <p>
              Details:{" "}
              {launch.details
                ? launch.details
                : "No details available for this launch"}
            </p>
            <a
              href={launch.links.webcast}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Launch
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LaunchTracker;