import React from 'react';
import CarList from '../components/CarList';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import carsData from '../data/car';
const Home = () => {
    const [cars, setCars] = React.useState(carsData);
    const [currentPage, setCurrentPage] = React.useState(1);
    const carsPerPage = 6;
    const totalPages = Math.ceil(cars.length / carsPerPage);

    

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearch = (query) => {
        if (query === '') {
            setCars(carsData);
        } else {
            const filteredCars = carsData.filter(car => car.name.toLowerCase().includes(query.toLowerCase()));
            setCars(filteredCars);
        }
    };

    const startIndex = (currentPage - 1) * carsPerPage;
    const visibleCars = cars.slice(startIndex, startIndex + carsPerPage);

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <CarList cars={visibleCars} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
    );
};

export default Home;
