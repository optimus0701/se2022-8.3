<a name="readme-top"></a>
<details>
  <summary>Các nội dung chính</summary>
  <ol>
    <li>
      <a href="#về-dự-án">Về dự án</a>
    </li>
    <li>
      <a href="#tìm-hiểu-về-lập-trình-di-động">Tìm hiểu về lập trình di động</a>
      <ul>
        <li><a href="#một-vài-khái-niệm-lập-trình-di-động">Một vài khái niệm lập trình di động</a></li>
        <li><a href="#xu-hướng-phát-triển-lập-trình-di-động">Xu hướng phát triển lập trình di động</a></li>
        <li><a href="#các-loại-lập-trình-di-động">Các loại lập trình di động</a></li>
        <li><a href="#các-nền-tảng-lập-trình-di-động-phổ-biến">Các nền tảng lập trình di động phổ biến</a></li>
      </ul>
    </li>
    <li>
      <a href="#tìm-hiểu-lập-trình-react-native">Tìm hiểu lập trình React Native</a>
      <ul>
        <li><a href="#các-khái-niệm-trong-react-native">Các khái niệm trong React Native</a></li>
        <li><a href="#các-chức-năng-chính-cơ-chê-hoạt-động-thư-viện">Các chức năng chính, cơ chế hoạt động, thư viện</a></li>
        <li><a href="#các-xây-dựng-thư-viện-sử-dụng-thư-viện-đang-có-xây-dựng-thư-viện-native">Các xây dựng thư viện, sử dụng thư viện đang có, xây dựng thư viện native (java cho android, swift cho ios)</a></li>
        <li><a href="#ưu-và-nhược-điểm-của-react-native">Ưu và nhược điểm của React Native</a></li>
        <li><a href="#xu-thế-lập-trình-react-native-hiện-nay">Xu thế lập trình React Native hiện nay</a></li>
        <li><a href="#template-dự-án-ignite">Template dự án Ignite</a></li>
      </ul>
    </li> 
    <li>
        <a href="#so-sánh-react-native-với-flutter">So sánh React Native với Flutter</a>
    </li>
    <li>
        <a href="#ứng-dụng-shopee-fake">Ứng dụng Shopee Fake</a>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
# Về dự án


SE2022-Nhom-8.3

Đề bài: Tìm hiểu lập trình React-Native, xây dựng ứng dụng thương mại điện tử trong lĩnh vực nội thất

Các thành viên gồm: <br>
-Vi Văn Đô <br>
-Nguyễn Trường An <br>
-Nguyễn Văn An <br>
-Đỗ Minh Hiếu

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Tìm hiểu về lập trình di động
### Một vài khái niệm lập trình di động
- Lập trình app mobile hay còn gọi là di động ứng dụng thiết lập là sử dụng các ngôn ngữ lập trình để xây dựng ứng dụng, tiện ích, chương trình và điều hành trong thông minh thiết bị. Hiện nay, có hai hệ thống phổ biến điện thoại thông minh điều hành là Android và iOS được nhiều người dùng lựa chọn.
### Xu hướng phát triển lập trình di động
- Theo thống kê cho thấy 70% lưu lượng truy cập được xuất hiện từ di động thiết bị. Theo báo cáo của Google, 80% người dùng smartphone có thể chọn đơn cao hơn. Statista tuyên bố rằng vào năm 2022, chi tiêu của người dùng trên App Store sẽ tăng lên 157 Tỷ USD
- Minh chứng lớn nhất cho sự phát triển của ứng dụng di động nghệ thuật đó là sự ra đời của hàng triệu ứng dụng thương mại điện tử như Shopee, Tiki và Lazada, ... Do đó công việc lập trình ứng dụng sẽ có tương lai nghề nghiệp open width.
### Các loại lập trình di động
##### Native App (Ứng dụng gốc hay ứng dụng native): 
- Là một chương trình phần mềm được phát triển để sử dụng trên một nền tảng hoặc thiết bị cụ thể. 
- Vì một ứng dụng gốc được xây dựng để sử dụng trên một thiết bị cụ thể và hệ điều hành của nó, nên nó có khả năng sử dụng phần cứng và phần mềm dành riêng cho thiết bị. Các ứng dụng gốc có thể cung cấp hiệu suất tối ưu hóa và tận dụng công nghệ mới nhất, chẳng hạn như GPS, so với các ứng dụng web hoặc ứng dụng đám mây di động được phát triển chung trên nhiều hệ thống.
##### Web App (Ứng dụng web):
- Là một ứng dụng mà người dùng không cần tải xuống và thay vào đó truy cập thông qua trình duyệt web qua mạng. Các trình duyệt web mẫu bao gồm Google Chrome, Safari và Mozilla Firefox. 
- Mặc dù các Native App phụ thuộc vào một thiết bị cụ thể, phần lớn các ứng dụng web có thể được viết bằng JavaScript, CSS và phiên bản HTML tiêu chuẩn để sử dụng phổ biến trên nhiều trình duyệt khác nhau. Các Web App có thể sử dụng một cơ sở mã duy nhất vì chúng không được thiết kế  dành riêng cho một thiết bị cụ thể nào. Các ứng dụng web rất nhanh và đơn giản để xây dựng, nhưng không linh hoạt và nhanh chóng như các ứng dụng native.
##### Hybrid App (Ứng dụng lai):
- Là sự kết hợp giữa ứng dụng native và ứng dụng web. Hoạt động bên trong của một ứng dụng lai tương tự như một ứng dụng web, nhưng nó được cài đặt như một ứng dụng gốc. Các ứng dụng lai có quyền truy cập vào API thiết bị nội bộ, có nghĩa là chúng có thể sử dụng các tài nguyên như máy ảnh, lưu trữ và GPS. Instagram là một ví dụ điển hình của ứng dụng lai. 
- Các ứng dụng lai được xây dựng với HTML và CSS. Các nhà lập trình tạo một cơ sở mã, sau đó thực hiện các thay đổi nhỏ để điều chỉnh ứng dụng theo từng nền tảng. Các hybrid app thường chạy một ứng dụng web thông qua một container hoặc WebView, một trình duyệt có thể được chứa bên trong một ứng dụng di động.


### Các nền tảng lập trình di động phổ biến
+ Flutter
+ React Native
+ Kotlin
+ Swift

# Tìm hiểu lập trình React native
### Các khái niệm trong React Native
- React native là một công cụ giúp chúng ta lập trình đa nền tảng để tạo ra các ứng dụng trên môi trường native. Nó là một framework mã nguồn mở được phát triển bởi Facebook, cho phép bạn sử dụng Java script để phát triển phần mềm trên điện thoại di động Android và IOS. Các khái niệm cơ bản của React bao gồm:
##### Components
- Components là một thành phần quan trọng nhất trong React, nó giúp phân chia các thành phần giao diện (UI) ra các thành phần nhỏ hơn. 
- Trong một trang bao gồm nhiều các components khác nhau. Một React Component là thành phần nhận vào một props và trả về JSX dùng để hiện thị giao diện người dùng.
##### Props
- Props là một object được truyền vào trong một components, mỗi components sẽ nhận vào props và trả về react element. 
- Props cho phép chúng ta giao tiếp giữa các components với nhau bằng cách truyền tham số qua lại giữa các components. Cách truyền một props cũng giống như cách mà bạn thêm một attributes cho một element HTML.
##### State
- State là một object có thể được sử dụng để chứa dữ liệu hoặc thông tin về components, có thể được thay đổi bất cứ khi nào mong muốn.
- Khác với props chúng ta có thể truyền props sang các components khác nhau thì state chỉ tồn tại trong phạm vi của components chứa nó, mỗi khi state thay đổi thì components đó sẽ được render lại. Nó được dùng để xử lý dữ liệu thay đổi theo thời gian hoặc trả lời tương tác từ người dùng.

### Các chức năng chính, cơ chế hoạt động, thư viện
- React Native cung cấp nhiều tính năng và cơ chế hoạt động để xây dựng ứng dụng di động đa nền tảng. Một số tính năng và thư viện quan trọng của React Native bao gồm:
##### JSX
- Là một phần của React Native cho phép các lập trình viên viết mã HTML giống như trong web để tạo các thành phần UI.
##### Redux
- Là một thư viện quản lý trạng thái ứng dụng và giúp cho việc quản lý trạng thái trở nên dễ dàng hơn. 
##### Firebase
- Là một nền tảng cloud được cung cấp bởi Google và được sử dụng để lưu trữ dữ liệu và xử lý các hoạt động của ứng dụng.
##### Google Maps
- Thư viện Google Maps được sử dụng để tích hợp bản đồ trong ứng dụng.
##### Camera
- Thư viện Camera cho phép truy cập camera của điện thoại và chụp ảnh trong ứng dụng.

### Các xây dựng thư viện, sử dụng thư viện đang có, xây dựng thư viện native
- React Native hỗ trợ các thư viện bên thứ ba để giúp lập trình viên phát triển ứng dụng di động nhanh chóng hơn. Các lập trình viên cũng có thể tự tạo các thư viện mới để giúp cho việc xây dựng ứng dụng di động trở nên dễ dàng hơn. 
- Sử dụng thư viện đang có: Có nhiều thư viện được phát triển cho React Native như react-native-maps, react-native-camera, react-native-firebase, react-native-vector-icons... Lập trình viên có thể sử dụng các thư viện này để giảm thời gian phát triển và cải thiện chất lượng ứng dụng của mình. 
- Xây dựng thư viện: Lập trình viên cũng có thể tự tạo các thư viện mới cho React Native bằng cách sử dụng JavaScript hoặc các ngôn ngữ khác như Java (cho Android) hoặc Swift (cho iOS). Việc tạo ra các thư viện này giúp cho việc tái sử dụng mã và phát triển ứng dụng trở nên dễ dàng hơn. 
- Xây dựng thư viện native: Ngoài việc sử dụng các thư viện bên thứ ba, lập trình viên cũng có thể sử dụng mã native để xây dựng các thành phần cho ứng dụng. Với React Native, lập trình viên có thể sử dụng Java cho Android và Swift cho iOS để tạo các thành phần native.

### Ưu và nhược điểm của React Native
##### Ưu điểm
- Có thể tái sử dụng code : React Native cho phép các developer có thể tái sử dụng code trong khi phát triển các ứng dụng đa nền tảng. Đặc biệt, developer có thể tái sử dụng hầu như 80-90% các đoạn code thay vì phải viết và tạo các ứng dụng riêng biệt cho các nền tảng khác nhau. Ưu điểm này giúp người dùng tiết kiệm được thời gian, giảm chi phí phát triển ứng dụng, cũng như tận dụng được nguồn nhân lực tốt hơn.
- Cộng đồng lớn: React Native đang ngày càng phổ biến và nhận được sự đóng góp của nhiều lập trình viên. Đặc biệt nó được xây dựng và hỗ trợ cho Facebook với lượng lớn cộng tác viên hoạt động năng nổ.
- Hot reloading: Với React Native, bạn sẽ không cần phải tốn quá nhiều thời gian để tổng hợp app mỗi khi có sự thay đổi. Bạn chỉ cần làm mới app trong thiết bị, emulator hoặc simulator.
- Tính ổn định và tối ưu: Được phát triển bởi Facebook, React Native có hiệu năng ổn định khá cao.
##### Nhược điểm
- Vẫn còn thiếu nhiều component quan trọng.
- Không thể thực hiện công việc xây dựng các chương trình iOS trên hệ điều hành Windows. 
- React Native không có khả năng xây dựng được các app quá phức tạp nếu như  không có thêm sự hiểu biết về các ngôn ngữ lập trình khác như Objective-C, Swift, Java,...
- Không sử dụng để viết các chương trình game có cách chơi phức tạp và đòi hỏi tính năng đồ hoạ cao.
- Vì sử dụng JavaScript nên chưa có sự bảo mật an toàn.
- Khả năng tùy biến trong một số module chưa thật sự tốt.

### Xu thế lập trình React Native hiện nay
- React Native đang là nền tảng phát triển di động phổ biến nhất hiện nay, vậy tạo nên một cộng đồng người học React Native rất lớn trên toàn thế giới. Với nhiều ưu điểm nổi bật, React Native là lựa chọn hàng đầu của các ông lớn trong ngành công nghệ. Vì vậy cơ hội nghề nghiệp cho bạn ở lĩnh vực này là vô cùng lớn.
- Hiện nay, hầu hết các doanh nghiệp tuyển dụng React Native với mức lương từ 15 – 30 triệu đồng/ tháng. Và với các doanh nghiệp có quy mô lớn, nếu các kĩ sư React Native có kinh nghiệm làm việc lâu năm thì mức thu nhập có thể cao hơn.
- Không mất quá nhiều thời gian để học và thành thạo React Native , cơ hội tuyển dụng xuyên quốc gia càng cho thấy React Native sẽ là xu hướng lập trình di động hoàn hảo nhất.

### Template dự án Ignite
- Ignite là một boilerplate để tạo ra khung của dự án và code trên đó. Đây là một boilerplate mạnh mẽ, đầy đủ và khá linh hoạt cung cấp một công cụ riêng để khởi tạo ứng dụng được gọi là Ignite CLI.
##### Ignite CLI
- Dễ dàng nhanh chóng tạo ra một ứng dụng React Native đầy đủ.
- No runtime! Đây chỉ là một công cụ dành cho developer. Không phải là một thư viện khiến bạn phải phụ thuộc vào hoặc tìm cách nâng cấp.
- Một cộng đồng lớn đủ lớn, được kiểm thử và sử dụng bởi hàng ngàn người trên toàn thế giới, đủ để hỗ trợ bạn khi cần thiết.
- Một danh sách các plugin cần thiết và ngày càng được mở rộng mỗi khi cần khởi tạo ứng dụng mới.
- Hoạt động trên cả MacOS, Windows và Linux vì không phải tất cả các developer đều chỉ sử dụng một nền tảng.
- Tiết kiệm trung bình 2 tuần cho việc phát triển ứng dụng trên React Native của bạn.

# So sánh React Native với Flutter
### Điểm giống nhau
Cả Flutter vs React Native điều là các Cross – platform framework được thiết kế để giải quyết các vấn đề giống nhau. Một vài điểm tương đồng giữa Flutter và React Native có thể kể đến như:
- Được phát triển bởi các ông lớn trong lĩnh vực công nghệ, do đó sẽ nhận được sự hỗ trợ liên tục. Người sử dụng Flutter và React Native chắc chắn rằng khi bug xảy ra sẽ được xử lý kịp thời. 
- Miễn phí và đều open – source. Quyền truy cập vào code là một tính năng khiến cho hai công nghệ này trở nên tốt hơn nhiều so với các đối thủ khác. Các chuyên gia về công nghệ thông tin đánh giá cao khả năng tùy chỉnh và các framework với mã nguồn mở.
- Trải nghiệm người dùng tốt đã góp phần rất lớn cho sự phát triển của hai framework này. 
- Đều sở hữu tính năng Hot Reload cho phép nhìn thấy sự thay đổi của giao diện ngay lập tức mà không cần phải load lại ứng dụng.
- Nhờ việc sử dụng chung codebase mang đến sự phát triển nhanh chóng và đem lại hiệu quả về mặt chi phí. Tuy vậy, chúng khá giống nhau đối với các framework đa nền tảng.
### Điểm khác nhau
##### React Native
- Ngôn ngữ: JavaScript – ngôn ngữ số 1 đối với 1 số lập trình viên. Gần 70% chuyên gia đang sử dụng ngôn ngữ này cho biết việc chuyển đổi sang React Native tương đối dễ dàng.
- Hiệu năng: React Native sử dụng một cầu nối Javascript để kết nối với ngôn ngữ native. Với các phương thức bất đồng bộ thì việc thông qua cây cầu sẽ khiến cho việc render trở nên chậm chạp hơn. 
- APIs và UI: React Native sử dụng các thư viện của bên thứ 3.
- IDE: React Native có thể chọn hầu hết mọi IDE.

##### Flutter
- Ngôn ngữ: Dart – là một ngôn ngữ tương đối mới, khá kén người sử dụng. Mặc dù có nhiều bạn trẻ lựa chọn học ngôn ngữ này nhưng có khá ít người thành thạo. Tuy nhiên, nếu đã từng làm việc với các ngôn ngữ hướng đối tượng thì việc sử dụng ngôn ngữ này sẽ thuận lợi hơn nhiều.
- Hiệu năng: Flutter nổi bật hơn React Native bởi công cụ C++ được sử dụng trong framework Flutter và thư viện đồ họa Skia. Quá trình viết mã nhanh hơn. 
- APIs và UI: Khả dụng hơn. Flutter có các thành phần render tích hợp có sẵn, điều hướng, các công cụ để kiểm tra, truy cập API thiết bị, v.v.
- IDE: Flutter không được nhiều lựa chọn để trở thành môi trường phát triển do công nghệ còn mới. Flutter được hỗ trợ bởi Visual Studio Code, IntelliJ và Android Studio.

# Ứng dụng Shopee Fake
Ứng dụng sử dụng React Native làm frond-end, python và sql làm back-end
# Các bước cài đặt
## Bước 1: clone source về máy
git clone https://github.com/optimus0701/se2022-8.3.git
## Bước 2: vào thư mục ReacNative/MyShopee chạy npm install để cài thư viện
## Bước 3: vào thư mục Resouces/saleapp/ cài thư viện cần thiết của python
## Bước 4: config file __init__, tạo 1 schema tên library trong mysql, chạy file model.py để tạo cơ sở dữ liệu mới
## Bước 5: cài ngrok để app có thể kết nối với localhost
## Bước 6: chạy file start.bat trong thư mục ReacNative/MyShopee để chạy app sau đó vào expo go trên điện thoại để xem kết quả



