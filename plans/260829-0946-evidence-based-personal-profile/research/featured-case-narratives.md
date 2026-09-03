# Featured case narratives

Status: Vietnamese draft for user approval  
Updated: 2026-08-29

These drafts distinguish personal contribution from team/platform scope. They avoid unverified business metrics, sole-credit language, and private project material.

## 1. MyAgents — Build

### Card copy

**MyAgents**  
*Biến những nhu cầu AI rời rạc thành một hệ sinh thái sản phẩm có thể triển khai và vận hành.*

Tôi khởi xướng MyAgents từ một câu hỏi thực tế: một đội ngũ nhỏ cần AI cho nội dung, tài liệu, CRM và tài chính, nhưng càng thêm công cụ thì quy trình càng rời rạc. Thay vì dựng một marketplace chung chung, tôi định hướng MyAgents thành một hệ sinh thái: mỗi sản phẩm giải quyết một workflow rõ, còn nền tảng chung giữ phần giới thiệu, gói dịch vụ, booking, đơn hàng, thanh toán và vận hành.

**Vai trò:** Khởi xướng sản phẩm và tham gia vận hành kỹ thuật.  
**Bằng chứng:** [myagents.so](https://myagents.so), màn hình AutoSocial đã duyệt, mã nguồn/commit đúng danh tính trong web, payment và deployment.

### Case detail

#### Bài toán

Các nhu cầu AI trong doanh nghiệp nhỏ thường xuất hiện riêng lẻ: tạo nội dung, quản lý tri thức, chăm sóc khách hàng, tài chính. Nếu mỗi phần trở thành một công cụ độc lập, người vận hành vẫn phải nối dữ liệu và trạng thái bằng tay.

#### Ràng buộc

- Bắt đầu nhỏ nhưng không khóa đường mở rộng thành nhiều sản phẩm.
- Ưu tiên self-host và API AI riêng để khách hàng giữ quyền kiểm soát dữ liệu và chi phí.
- Trải nghiệm công khai phải bán được giá trị của từng sản phẩm; phần admin phải vận hành được plan, booking và payment.
- Luồng thanh toán cần đối soát chặt, xử lý giao dịch trễ, sai số tiền, trùng lặp và trạng thái cần review.
- Đây là sản phẩm có đóng góp của đội ngũ; không được kể như công việc của một người.

#### Quyết định

1. Chuyển homepage từ tư duy marketplace sang trang giới thiệu một hệ sinh thái vận hành AI-first.
2. Cho mỗi sản phẩm một landing page và workflow riêng, nhưng dùng chung nền tảng sản phẩm, gói giá, đơn hàng và vận hành.
3. Đưa giá/plan từ admin sang booking thay vì hard-code ở landing page.
4. Thiết kế đối soát PayFS/VietQR theo ledger và trạng thái manual review, không coi một webhook là đủ để kết luận thanh toán.
5. Dùng AutoSocial để chứng minh vòng lặp đầy đủ: knowledge → draft → review → schedule → publish → observe.

#### Phần tôi trực tiếp đóng góp

Mười lăm commit trong lịch sử cục bộ có tên tác giả đã xác nhận `ntduc`. Các thay đổi có thể kiểm tra gồm persisted app state, hardening PayFS, mobile checkout, production Compose, admin-plan UX và các lỗi triển khai. Ngoài code, chuỗi quyết định sản phẩm trong session archive ghi rõ định hướng ecosystem, landing riêng cho từng sản phẩm, booking lấy dữ liệu từ admin và mô hình platform core.

#### Kết quả có thể khẳng định

- Trang công khai [myagents.so](https://myagents.so) đang trình bày MyAgents như một hệ sinh thái vận hành AI-first.
- Codebase web có product, plan, voucher, order, payment, webhook reconciliation và trạng thái review.
- Bộ screenshot AutoSocial thể hiện dashboard, campaign và luồng tạo–duyệt–lên lịch ở dạng sản phẩm, không chỉ là concept.

Không công bố số khách hàng, doanh thu, adoption hoặc hiệu quả vận hành khi chưa có nguồn được phép xuất bản.

#### Điều tôi học được

Một sản phẩm AI không trở thành năng lực vận hành chỉ vì có model hoặc chatbot. Giá trị xuất hiện khi dữ liệu, quyền quyết định, trạng thái công việc, payment và đường xử lý ngoại lệ cùng nằm trong một vòng lặp rõ ràng.

---

## 2. GoClaw / Dewee — Contribution and Operate

### Card copy

**GoClaw / Dewee**  
*Đóng góp ở những điểm một nền tảng AI agent dễ hỏng khi đi vào vận hành thật.*

Tôi ưu tiên GoClaw vì đây là nơi thể hiện rõ cách tôi làm việc trong một hệ thống lớn không do mình tạo ra: hiểu ranh giới hiện có, sửa đúng failure mode, giữ quyền truy cập và luồng vận hành nhất quán. Phần công khai gồm các thay đổi trực tiếp trên fork `@itsddvn`; phần Dewee bổ sung kinh nghiệm về Zalo OA, tenant, handoff, hooks và tracing nhưng không công khai source riêng.

**Vai trò:** Contributor.  
**Bằng chứng:** Bảy commit GoClaw công khai đúng danh tính `ntduc` / `dcppsw`; lịch sử Dewee cục bộ đã kiểm tra. Không dùng PR #1048 vì tác giả là người khác.

### Case detail

#### Bài toán

Một AI agent platform đa tenant không chỉ cần chạy được prompt. Nó phải khởi động đúng, kiểm tra provider trước khi nhận việc, hiển thị đúng agent mà người dùng được phép truy cập, áp dụng policy công cụ không phá luồng hợp lệ, và khởi động các đường gửi/nhận theo đúng thứ tự.

#### Ràng buộc

- GoClaw là dự án nhiều contributor; mọi tuyên bố phải giới hạn ở thay đổi có thể gắn đúng tác giả.
- Thay đổi phải tôn trọng mô hình multi-tenant, quyền truy cập và đường chạy managed/standalone.
- Một số công việc Dewee nằm trong source không công khai; chỉ được mô tả ở mức đã kiểm tra và không dẫn link riêng.
- Merge/integration history không được trình bày như feature do cá nhân viết.

#### Các thay đổi GoClaw công khai đã xác minh

1. [Provider connectivity verification và onboarding placeholders](https://github.com/itsddvn/goclaw/commit/53cd9ce91b82ffc13f325d8e58aa9793fe14c696) — chặn credential sai trước khi seed/khởi động tiếp.
2. [Path-policy exemptions cho ExecTool](https://github.com/itsddvn/goclaw/commit/e1c2a9208e6c6e7e2e208c99e296e1c86a95f832) — sửa đường policy đã được gọi nhưng chưa được triển khai.
3. [Lọc team chat scope rỗng](https://github.com/itsddvn/goclaw/commit/bd158175d064861e41ba510eb6079d7acbad2126) — loại một crash UI cụ thể.
4. [Hiển thị đúng active agents trong chat](https://github.com/itsddvn/goclaw/commit/19ff0b2a250bc77fb860faef31539553745d03c7) — chuyển sang nguồn store/access-aware trong managed mode.
5. [Hiển thị đúng model ID](https://github.com/itsddvn/goclaw/commit/882cfd549ff88bd9d2dfc1a0f2cee528846ec9a4) — sửa dropdown model của OpenAI-compatible providers.
6. [Cảnh báo provider ở overview](https://github.com/itsddvn/goclaw/commit/1aa46e0f6a0bde9fd791dcfe93f682ea44bab285) — làm rõ trạng thái cấu hình trước khi dùng.
7. [Khởi động outbound dispatcher trước channel check](https://github.com/itsddvn/goclaw/commit/321a8f28935def374d7c4158a6a312ff71413ddc) — sửa thứ tự startup của đường gửi tin.

#### Phần Dewee đã xác minh cục bộ

Bốn mươi ba commit trên toàn bộ refs có tên tác giả chính xác `ntduc` hoặc `dcppsw`; 37 entry không phải merge. Phạm vi gồm Zalo OA setup, callback và consent, webhook transport, tenant pairing/handoff, hooks, tracing, tests và integration follow-up. Website không công khai repo, diff hay asset Dewee cho tới khi có nguồn công khai và quyền sử dụng rõ.

#### Kết quả có thể khẳng định

- Bảy thay đổi GoClaw tồn tại công khai dưới các danh tính đã được Đức xác nhận.
- Các thay đổi giải quyết failure mode cụ thể ở onboarding, provider, tool policy, access-aware agent listing, UI state và startup order.
- Lịch sử Dewee cho thấy một cụm đóng góp vận hành rộng hơn, nhưng chỉ dùng làm bối cảnh nội bộ ở thời điểm này.

Không biến số commit thành thành tích, không dùng PR #1048, và không nhận công phần Zalo GoClaw do `@vanducng` thực hiện.

#### Điều tôi học được

Đóng góp có giá trị trong một platform lớn thường nằm ở những giao điểm ít hào nhoáng: nơi permission gặp UX, nơi startup order gặp channel state, và nơi một fallback sai có thể biến lỗi nhỏ thành sự cố vận hành.

---

## 3. myskills + PDM Kit — Codify

### Card copy

**Skills as infrastructure**  
*Biến kinh nghiệm triển khai thành workflow có thể kiểm tra, tái sử dụng và chia sẻ an toàn.*

Tôi không muốn mỗi dự án lại bắt đầu bằng một chuỗi prompt ghi nhớ thủ công. `myskills` và PDM Kit là hai cách tôi đóng gói kinh nghiệm: một bên biến cách làm thành agent skill có contract, test và ranh giới public/private; bên còn lại biến vòng đời tài liệu dự án thành quy trình có cấu trúc, kiểm tra và export.

**Vai trò:** Creator và maintainer.  
**Bằng chứng:** [skills-shared](https://github.com/itsddvn/skills-shared), lịch sử Git xác nhận của `myskills` và PDM Kit, workflow validate/test/publish và cấu trúc bảy phase tài liệu.

### Case detail

#### Bài toán

Khi làm nhiều dự án với coding agent, lỗi không chỉ đến từ code. Context bị đầy, task bị bỏ sót, “đã xong” không khớp trạng thái thật, UI trông máy móc, tài liệu và code trôi khỏi nhau. Nếu cách khắc phục chỉ nằm trong trí nhớ hoặc prompt rời rạc, cùng lỗi sẽ lặp lại.

#### Ràng buộc

- Skill phải đủ ngắn để agent dùng đúng, nhưng logic lớn cần tách thành reference và script tất định.
- Private knowledge không được rơi vào public mirror.
- Public artifact phải qua validation, kiểm thử cô lập và kiểm tra secret/path trước khi publish.
- Hệ thống tài liệu không được tự bịa dữ liệu nghiệp vụ, pháp lý hoặc thông tin công ty còn thiếu.
- Quy trình phải hữu ích ở lần dùng sau, không chỉ ghi lại một dự án đã xong.

#### Quyết định

1. Dùng một private source catalog làm nguồn sự thật; mỗi skill có version và visibility rõ.
2. Tách hướng dẫn, reference, script, asset và eval theo trách nhiệm.
3. Chỉ mirror skill public sau khi validate, test trong môi trường no-network và kiểm tra payload.
4. Với PDM Kit, tổ chức tài liệu theo bảy giai đoạn: requirements, system design, development, testing, packaging, deployment và release.
5. Bao quanh generation bằng validation và export, thay vì coi file được tạo ra là đã hoàn thành.

#### Phần tôi trực tiếp đóng góp

- `myskills`: 14/14 commit có tên tác giả `ntduc`.
- PDM Kit: 44/44 commit có tên tác giả `dcppsw`.
- `skills-shared`: public mirror có 8/9 commit mang tên tác giả đã xác nhận và chứa một skill có thể cài đặt, source, reference, fixture và test.

#### Kết quả có thể khẳng định

- [skills-shared](https://github.com/itsddvn/skills-shared) là repository công khai, có skill, quy trình cài và bộ kiểm tra đi kèm.
- Private catalog có workflow phân loại visibility, validate, isolated test, mirror, attest và publish.
- PDM Kit có pipeline bảy phase, validation và export; dữ liệu công ty/client không được dùng làm asset công khai.

Không công khai danh sách private skill, contract, company metadata hoặc số liệu tiết kiệm thời gian khi chưa có phép đo xuất bản được.

#### Điều tôi học được

Codify không phải viết thêm tài liệu. Đó là biến một quyết định tốt thành một đường đi có guardrail, bằng chứng và tiêu chí dừng — để người khác hoặc chính mình có thể lặp lại kết quả mà không cần nhớ toàn bộ bối cảnh ban đầu.

## English workflow

Translate these narratives only after the Vietnamese role wording, evidence set, and asset choices are approved. English must remain equivalent; it may not strengthen claims or introduce new metrics.
