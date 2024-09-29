import { useState, useEffect } from "react";

const SpaceX_API_URL= 'https://api.spacexdata.com/v4/launches';

function LaunchTracker(){
    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const launchesPerPage = 10;

}

export default LaunchTracker;