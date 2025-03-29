import React, { useState } from 'react';
import BookedDevices from '../components/BookedDevices.jsx';
import AvailableDevices from '../components/AvailableDevices.jsx';
import './BookingPage.css';

function BookingPage() {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState('available'); // 'available' hoặc 'booked'

  const handleShowResults = () => {
    setActiveTab('booked');
  };

  const handleBackToAvailable = () => {
    setActiveTab('available');
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Đặt Chỗ Mượn Thiết Bị</h1>
        <div className="search-container">
          <input type="text" placeholder="Tìm kiếm" className="search-input" />
          <button className="search-button">Tìm</button>
        </div>
        <div className="user-info" onMouseEnter={() => setShowUserDropdown(true)} onMouseLeave={() => setShowUserDropdown(false)}>
          <span>User</span>
          {showUserDropdown && (
            <div className="user-dropdown">
              <div className="dropdown-item">Đăng nhập</div>
              <div className="dropdown-item">Đăng xuất</div>
            </div>
          )}
        </div>
      </header>
      
      <div className="main-content">
        <div className="sidebar">
          <h2>Menu</h2>
        </div>
        
        <div className="content">
          {activeTab === 'available' ? 
            <AvailableDevices onShowResults={handleShowResults} /> : 
            <BookedDevices onBack={handleBackToAvailable} />
          }
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Về Chúng Tôi</h3>
            <p>Hệ thống đặt chỗ thiết bị của thư quán</p>
          </div>
          <div className="footer-section">
            <h3>Liên Hệ</h3>
            <p>Email: contact@example.com</p>
            <p>Điện thoại: 0123456789</p>
          </div>
          <div className="footer-section">
            <h3>Truy Cập Nhanh</h3>
            <ul>
              <li>Trang chủ</li>
              <li>Danh sách thiết bị có thể Đặt</li>
              <li>Hướng dẫn sử dụng</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>@2025 Hệ Thống Đặt Chỗ Thiết Bị</p>
        </div>
      </footer>
    </div>
  );
}

export default BookingPage; 