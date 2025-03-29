import React, { useState } from 'react';
import './AvailableDevices.css';

function AvailableDevices({ onShowResults }) {
  const [bookingDate, setBookingDate] = useState('');
  
  const devices = [
    { id: '003', name: 'Màn hình chiếu', type: 'Thiết bị trình chiếu', status: 'Còn thiết bị', available: true },
    { id: '004', name: 'Máy chiếu', type: 'Thiết bị trình chiếu', status: 'Hết thiết bị', available: true },
    { id: '005', name: 'Máy in', type: 'Thiết bị văn phòng', status: 'Còn thiết bị', available: false },
    { id: '006', name: 'Bàn phím', type: 'Phụ kiện', status: 'Hết thiết bị', available: true },
    { id: '007', name: 'Loa Bluetooth', type: 'Thiết bị âm thanh', status: 'Còn thiết bị', available: false },
  ];

  return (
    <div className="device-list-container">
      <h2>Danh sách thiết bị có thể đặt</h2>
      <table className="device-table">
        <thead>
          <tr>
            <th>Tên thiết bị</th>
            <th>Loại</th>
            <th>Tình trạng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {devices.map(device => (
            <tr key={device.id}>
              <td>{device.name}</td>
              <td>{device.type}</td>
              <td>{device.status}</td>
              <td>
                {device.available ? (
                  <button className="reserve-button">
                    Đặt
                  </button>
                ) : (
                  <span className="not-available">Không thể đặt</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="booking-section">
        <h2>Đặt Chỗ</h2>
        <div className="booking-form">
          <div className="form-group">
            <label>Ngày đặt:</label>
            <input 
              type="date" 
              value={bookingDate} 
              onChange={(e) => setBookingDate(e.target.value)}
              className="date-input"
            />
          </div>
          <button className="booking-button">Xác nhận đặt chỗ</button>
        </div>
      </div>
      
      <button className="show-results-button" onClick={onShowResults}>
        Hiển thị kết quả đặt
      </button>
    </div>
  );
}

export default AvailableDevices; 