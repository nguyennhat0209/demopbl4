const video = document.getElementById('cameraVideo');
const canvas = document.getElementById('snapshotCanvas');
const timeDisplay = document.getElementById('timeDisplay');
const ctx = canvas.getContext('2d');

// Lấy camera của laptop
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        video.srcObject = stream;
    })
    .catch(function(err) {
        console.error("Lỗi khi truy cập camera: ", err);
    });
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString(); // Lấy định dạng thời gian HH:MM:SS
        timeDisplay.textContent = timeString;
    }
    
    // Cập nhật thời gian mỗi giây
    setInterval(updateTime, 1000);
    
function rewind30() {
    alert("Tua ngược không hoạt động với live stream.");
}

function forward30() {
    alert("Tua tiếp không hoạt động với live stream.");
}

function takeSnapshot() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'snapshot.png';
    link.click();
}

function toggleCutControls() {
    // Hiển thị hoặc ẩn phần điều khiển cắt video
    if (cutControls.style.display === "none") {
        cutControls.style.display = "flex";
    } else {
        cutControls.style.display = "none";
    }
}

function confirmCut() {
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    if (parseFloat(startTime) >= parseFloat(endTime)) {
        alert("Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc!");
        return;
    }

    // Thông báo cắt video, ở đây chỉ là một ví dụ
    alert(`Cắt video từ ${startTime} đến ${endTime} giây.`);
    
    // Xử lý cắt video thực tế cần được thực hiện ở phía server hoặc với một API chỉnh sửa video
}
