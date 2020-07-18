<template>
  <!-- Begin page content -->
  <main role="main" class="flex-shrink-0">
    <Slider />
    <div class="container wow bounceInUp">
      <div class="pro-best">
        <div class="item-bar">
          <h4>Tin tuc moi nhat</h4>
        </div>
        <hr />
        <div class="row row-cols-2">
          <div class="col wow slideInLeft">
            <img class="img-sumary" src="images/production/photo1.jpg" alt />
            <div class="content">
              <h6>Cấm cửa TikTok và 58 ứng dụng Made in China</h6>
              <p>Ấn Độ vừa ra quyết định chưa từng có trong lịch sử, cấm cửa 59 ứng dụng lớn nhất Trung Quốc vì lý do an ninh..."</p>
            </div>
          </div>
          <div class="col wow slideInRight">
            <img class="img-sumary" src="images/production/photo2.jpg" alt />
            <div class="content">
              <h6>Bill Gates và Steve Jobs giới hạn thời gian dùng công nghệ ra sao</h6>
              <p>Các nhà tâm lý học từ lâu đã nhận thấy ảnh hưởng của điện thoại cho não bộ của con người..."</p>
            </div>
          </div>
          <div class="col wow slideInLeft">
            <div class="content">
              <img class="img-sumary" src="images/production/photo3.jpg" alt />
              <h6>LG ra máy điều hòa kiêm lọc bụi mịn PM 1.0</h6>
              <p>Điều hòa V10APF, V13APF hay máy lọc khí Puricare 360 đều có khả năng loại bỏ bụi PM 1.0, nhỏ hơn cả bụi PM 2.5 thông thường..."</p>
            </div>
          </div>
          <div class="col wow slideInRight">
            <img class="img-sumary" src="images/production/photo4.jpg" alt />
            <div class="content">
              <h6>5 smartphone có màu sắc ấn tượng nửa đầu 2020</h6>
              <p>Galaxy Z Flip được ví như hộp phấn màu tím, P40 Pro có hiệu ứng ánh kim cao cấp hay Reno 4 phá cách với phiên bản Reno Glow là những model có màu sắc nổi bật nhất..."</p>
            </div>
          </div>
        </div>
      </div>
      <div class="sv-best">
        <div class="item-bar">
          <h4>San pham noi bat</h4>
        </div>
        <hr />
        <div class="row row-cols-2">
          <div class="col wow slideInLeft">
            <img class="img-sumary" src="images/production/pro1.png" alt />
            <div class="content">
              <h6>Thiết Kế Website Trọn Gói Giá Rẻ uy tín chất lượng</h6>
              <p>Website là một kênh thông tin không thể thiếu đối với các doanh nghiệp trong việc kinh doanh và xây dựng phát triển thương hiệu..."</p>
            </div>
          </div>
          <div class="col wow slideInRight">
            <img class="img-sumary" src="images/production/mobile.png" alt />
            <div class="content">
              <h6>Phát triển ứng dụng di động cho IOS, Android và các nên tảng di động khác</h6>
              <p>
                As the ads boycott grows, Mark Zuckerberg shows no sign of backing down.
                "My guess is that all these advertisers will be back..."
              </p>
            </div>
          </div>
          <div class="col wow slideInLeft">
            <div class="content">
              <img class="img-sumary" src="images/production/pro3.jpg" alt />
              <h6>Phần mềm Desktop</h6>
              <p>Phần mềm Desktop là giải pháp giao dịch mới cho việc xây dựng trên nền tảng web (web-based), nên Quý khách có thể sử dụng bất kỳ thiết bị..."</p>
            </div>
          </div>
          <div class="col wow slideInRight">
            <img class="img-sumary" src="images/production/pro4.jpg" alt />
            <div class="content">
              <h6>Giới thiệu nhân sự cho các doanh nghiệp và đối tác</h6>
              <p>Thế giới ngày càng hiện đại, con người cũng đón nhận thông tin theo những cách khác nhau để tìm kiếm nguồn nhân lực phù hợp với nhu cầu của công ty thì nay..."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Slider from "./Slider";
export default {
  name: "Home",
  data: function() {
    return {};
  },
  components: {
    Slider
  }
};
</script>