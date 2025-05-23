

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import EventList from './components/Event/EventList';
import EventForm from './components/Event/eventform';
import BookedEventsList from './components/Event/BookedEventsList';
import UpdateEvent from './components/Event/UpdateEvent';
import ContactPage from './components/ContactPage/ContactPage';
import UserList from './components/UserList/UserList';
import EditProfile from './components/UserProfile/EditProfile';
import ProtectedRoute from './components/Protected/ProtectedRoute';
import ProtectedRoutedAdmin from './components/Protected/ProtectedRoutedAdmin';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'var(--background-white)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--border-radius-md)',
              boxShadow: 'var(--shadow-md)',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: 'var(--success-color)',
                secondary: 'white',
              },
              style: {
                border: '1px solid var(--success-color)',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: 'var(--danger-color)',
                secondary: 'white',
              },
              style: {
                border: '1px solid var(--danger-color)',
              },
            },
          }}
        />

        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/events" element={<EventList />} />
            
            {/* Protected User Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/booked-events" element={<BookedEventsList />} />
              <Route path="/edit-profile" element={<EditProfile />} />
            </Route>

            {/* Protected Admin Routes */}
            <Route element={<ProtectedRoutedAdmin />}>
              <Route path="/create-event" element={<EventForm />} />
              <Route path="/update-event/:id" element={<UpdateEvent />} />
              <Route path="/admin/users" element={<UserList />} />
            </Route>

            {/* FallBack Route */}
            <Route path="*" element={<Home />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
