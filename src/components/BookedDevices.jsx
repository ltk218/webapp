import React from 'react';
import './BookedDevices.css';

function BookedDevices({ onBack }) {
  const devices = [
    { id: '001', name: 'Máy chiếu', type: 'Thiết bị trình chiếu', date: '03-16-2002', status: 'Đang chờ xác nhận'},
    { id: '002', name: 'Máy in', type: 'Thiết bị văn phòng', date: '08-07-2018', status: 'Đang chờ xác nhận'},
    { id: '003', name: 'Bàn phím cơ', type: 'Phụ kiện', date: '08-21-2018', status: 'Đã được xác nhận'},
    { id: '004', name: 'Loa bluetooth', type: 'Thiết bị âm thanh', date: '04-20-2018', status: 'Đang chờ xác nhận'},
  ];

  return (
    <div className="device-list-container">
      <h2>Danh sách thiết bị đã đặt</h2>
      <table className="device-table">
        <thead>
          <tr>
            <th>Mã thiết bị</th>
            <th>Tên thiết bị</th>
            <th>Loại</th>
            <th>Ngày đặt</th>
            <th>Tình trạng</th>
          </tr>
        </thead>
        <tbody>
          {devices.map(device => (
            <tr key={device.id}>
              <td>{device.id}</td>
              <td>{device.name}</td>
              <td>{device.type}</td>
              <td>{device.date}</td>
              <td><span className="status-text">{device.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <button className="back-button" onClick={onBack}>
        Quay lại
      </button>
    </div>
  );
}

export default BookedDevices; 