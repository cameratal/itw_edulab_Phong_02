import { useEffect, useState } from "react";

/* Băng ảnh hero — chuyển mượt giữa ba ảnh.

   Cách làm: xếp CHỒNG cả ba ảnh lên nhau rồi chỉ đổi độ mờ. Không dùng kiểu
   trượt ngang hay thay `src`:
     · thay `src` thì lúc ảnh mới chưa tải xong khung sẽ chớp trắng;
     · trượt ngang trên một khung khổ đứng nhìn giật, mà ba ảnh này cùng một
       bối cảnh nên hoà mờ hợp hơn — trông như máy quay đổi nhân vật.

   Cả ba ảnh nằm sẵn trong DOM từ đầu nên khi tới lượt là đã tải xong, chuyển
   cảnh không bao giờ hụt hình.                                              */

const ANH = [
  { src: "/home_01.png", alt: "Beraterin von ITW EduLab im Büro" },
  { src: "/home_02.png", alt: "Facharbeiter aus Vietnam bei ITW EduLab" },
  { src: "/home_03.png", alt: "Facharbeiter, Fachkraft und Pflegekraft aus Vietnam" },
];

const GIU_MS = 4500;    // thời gian đứng yên của mỗi ảnh
const MO_MS = 1400;     // thời gian hoà mờ

export default function HeroSlideshow() {
  const [i, setI] = useState(0);

  /* Nạp ngầm hai ảnh sau. Chạy sau khi trang đã hiện nên không làm chậm
     màn hình đầu, mà tới giây 4,5 là đã có sẵn trong bộ nhớ đệm. */
  useEffect(() => {
    for (const a of ANH.slice(1)) {
      const img = new Image();
      img.src = a.src;
    }
  }, []);

  useEffect(() => {
    /* Người đặt hệ điều hành ở chế độ giảm chuyển động thì đứng yên ở ảnh
       đầu. Ảnh tự đổi là thứ gây khó chịu thật với một số người, và đây
       không phải nội dung bắt buộc phải xem hết. */
    const dungYen = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (dungYen) return;

    const t = setInterval(() => setI((n) => (n + 1) % ANH.length), GIU_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-full w-full">
      {ANH.map((a, n) => (
        <img
          key={a.src}
          src={a.src}
          alt={n === 0 ? a.alt : ""}
          aria-hidden={n !== 0}
          /* KHÔNG dùng lazy ở đây. Ba ảnh chồng lên nhau cùng một chỗ, nếu
             tới lượt mà ảnh chưa tải xong thì khung trắng trơn — đã gặp thật.
             Ảnh đầu tải ngay, hai ảnh sau được nạp ngầm ở useEffect bên dưới
             nên vừa không tranh băng thông lúc mở trang, vừa chắc chắn sẵn
             sàng trước lần chuyển đầu tiên ở giây thứ 4,5. */
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          className={
            "absolute inset-0 h-full w-full rounded-2xl object-cover transition-opacity ease-in-out " +
            (n === i ? "opacity-100" : "opacity-0")
          }
          style={{ transitionDuration: `${MO_MS}ms` }}
        />
      ))}

      {/* Ba chấm chỉ ảnh đang hiện. Bấm được để tự chuyển, không phải ngồi đợi. */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {ANH.map((a, n) => (
          <button
            key={a.src}
            type="button"
            onClick={() => setI(n)}
            aria-label={`Bild ${n + 1} von ${ANH.length}`}
            aria-current={n === i}
            className={
              "h-2 rounded-full transition-all duration-300 " +
              (n === i ? "w-6 bg-white" : "w-2 bg-white/55 hover:bg-white/80")
            }
          />
        ))}
      </div>
    </div>
  );
}
