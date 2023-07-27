import React from 'react'
import '../../styles/footer.css'
const footer = () => {
  return (
    <div>
        <footer className=" py-4 px-3 mb-[10px]">
    <div className="grid grid-cols-4 gap-24 ml-12 my-10">
        <div className="space-y-3">
            <p className="font-bold">HỆ THỐNG CỬA HÀNG TTL</p>
            <p className="text-[12px]">TTL TRAN TIEN LUONG STORE: PHU MINH STREET, MINH KHAI DISTRICT, HA NOI.</p>
            <p className="text-[12px]">Store 1:TRIEU KHUC, THANH XUAN, HA NOI</p>
            <p className="text-[12px]">Store 2:ME TRI, NAM TU LIEM, HA NOI</p>
            <p className="text-[12px]">Store 3:MO LAO, HA DONG, HA NOI</p>
        </div>
        <div className="space-y-3">
            <p className="font-bold">CHÍNH SÁCH</p>
            <p className="text-[12px]">Chính sách sử dụng website</p>
            <p className="text-[12px]">Phương thức thanh toán</p>
            <p className="text-[12px]">Chính sách giao nhận - vận chuyển</p>
            <p className="text-[12px]">Chính sách đổi trả</p>

        </div>
        <div className="space-y-3">
            <p className="font-bold">THÔNG TIN LIÊN HỆ</p>
            <p className="text-[12px]">CÔNG TY TTL Địa chỉ: 147 Bùi Đình Tuý</p>
            <p className="text-[12px]">SỐ CSKH: 0398764221 (10h -18h)</p>
            <p className="text-[12px]">Tuyển dụng: hr@TTL.vn</p>
            <p className="text-[12px]">For business: contact@TTL.vn</p>
        </div>
        <div className="space-y-3">
            <p className="font-bold">FOLLOW ON SOCIAL MEDIA</p>
            <div className="flex space-x-4 my-3">
            <img className="bg-white w-[50px]" src="https://cdn-icons-png.flaticon.com/128/739/739237.png" alt="" />
            <img className="bg-white w-[50px]" src="https://cdn-icons-png.flaticon.com/512/717/717392.png" alt="" />
            </div>
            <img className="w-[150px]" src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png" alt="" />
        </div>
    </div>
    <div className='fixed bottom-10 left-0 right-0'>
    <div className="marquee-container bg-black py-2 -mb-[150px]">
      <div className="marquee ">
      <div className="flex justify-between ">
            <div>
                <span className="message-text-title">SALE UPTO 50%</span>
                <span className="message-text-sub">HADES™ 2023</span>
            </div>
            <div>
                <span className="message-text-title">GET TO KNOW ABOUT OUR VIBE</span>
                <span className="message-text-sub">HADES™ 2023</span>
            </div>
            <div>
                <span className="message-text-title">SALE UPTO 50%</span>
                <span className="message-text-sub">HADES™ 2023</span>
            </div>
            <div>
                <span className="message-text-title">GET TO KNOW ABOUT OUR VIBE</span>
                <span className="message-text-sub">HADES™ 2023</span>
            </div>
           </div>
      </div>
    </div>
    </div>
    
</footer>

    </div>
  )
}

export default footer