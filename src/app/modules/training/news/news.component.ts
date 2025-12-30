import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  images: string[];
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  customOptions: OwlOptions;

  // All news data
  allNews: NewsItem[] = [
    // New news items (9 to 1) - displayed first
    {
      id: 1,
      title: '9th International Conference of Surgery - Alexandria University, held on May 1–2, 2025',
      description: `
Techsky Egypt is honored to participate in the 9th International Conference of Surgery – where we had the opportunity to introduce top surgeons to our advanced laser devices by PIOON MEDICAL LASER and laser fibers by OBERON.

We're proud to be part of the continuous development of laser-based solutions in proctology and excited for the impact this will bring to patient care.`,
      images: [
        '../../../../assets/images/news/9/1.jpg',
        '../../../../assets/images/news/9/2.jpg',
        '../../../../assets/images/news/9/3.jpg',
        '../../../../assets/images/news/9/4.jpg',
        '../../../../assets/images/news/9/5.jpg'
      ]
    },
    {
      id: 2,
      title: '43rd Annual Meeting of ESS - April 24-25, 2025',
      description: `What an incredible experience at the 43rd Annual Meeting of ESS on April 24–25, 2025!

We were proud to represent Techsky Egypt and showcase our latest laser devices from PIOON MEDICAL LASER and medical fibers by OBERON designed to revolutionize surgical outcomes.

It was a pleasure connecting with top surgeons and professionals, introducing them to our 1470nm laser solutions and discussing how our technology can truly transform patient care.`,
      images: [
        '../../../../assets/images/news/8/1.jpg',
        '../../../../assets/images/news/8/2.jpg',
        '../../../../assets/images/news/8/3.jpg',
        '../../../../assets/images/news/8/4.jpg'
      ]
    },
    {
      id: 3,
      title: 'ISUCRS 2025 - Cairo Interim',
      description: `Techsky Egypt had the honor to participate in ISUCRS 2025 – Cairo Interim. It was all about connecting with leading surgeons and demonstrating how our PIOON Medical laser systems are transforming the future of proctology and pelvic floor treatments.

What we showcased:
<ul>
  <li>Laser systems tailored for proctology procedures</li>
  <li>High performance laser fibers by OBERON</li>
  <li>Smart accessories supporting precision and safety</li>
</ul>

We hosted a hands-on laser training session at Ahmed Shafiq Hospital, where top surgeons from all over the world got real-time experience with our PIOON Medical laser systems.`,
      images: [
        '../../../../assets/images/news/7/1.jpg',
        '../../../../assets/images/news/7/2.jpg',
        '../../../../assets/images/news/7/3.jpg',
        '../../../../assets/images/news/7/4.jpg',
        '../../../../assets/images/news/7/5.jpg'
      ]
    },
    {
      id: 4,
      title: 'Egyptian Vascular and Endovascular Summit 2024, held on October 30-31',
      description: `Techsky Egypt honored to participate in the Egyptian Vascular and Endovascular Summit 2024, held on October 30-31 at the Intercontinental City Stars, Cairo!

Our booth was buzzing with excitement as we showcased the latest laser technology, specifically designed for vascular applications. Visitors were impressed by our state-of-the-art laser devices by PIOON MEDICAL LASER and fibers by OBERON, which are redefining the standards of vascular treatments and enhancing patient outcomes.

We're incredibly grateful for the opportunity to connect with some of the brightest minds in vascular medicine and to share our passion for revolutionizing healthcare. Thank you to everyone who visited us at the summit and contributed to the success of this event!`,
      images: [
        '../../../../assets/images/news/6/1.jpg',
        '../../../../assets/images/news/6/2.jpg',
        '../../../../assets/images/news/6/3.jpg',
        '../../../../assets/images/news/6/4.jpg'
      ]
    },
    {
      id: 5,
      title: '42nd Annual Meeting of the Egyptian Society of Surgeons',
      description: `We were thrilled to participate in the 42nd Annual Meeting of the Egyptian Society of Surgeons and showcase our groundbreaking laser devices from PIOON MEDICAL LASER.

The event provided an invaluable platform to connect with esteemed surgeons and demonstrate the transformative potential of our technology.

Our booth was a hub of activity as surgeons from across Egypt stopped by to explore our innovative solutions. From the precision of our laser devices by PIOON MEDICAL LASER to the versatility of our fibers by OBERON, attendees were captivated by the possibilities of revolutionizing their surgical practices.`,
      images: [
        '../../../../assets/images/news/5/1.jpg',
        '../../../../assets/images/news/5/2.jpg',
        '../../../../assets/images/news/5/3.jpg',
        '../../../../assets/images/news/5/4.jpg'
      ]
    },
    {
      id: 6,
      title: '20th Vascular Society of Egypt International Annual Conference',
      description: `We had a great time networking with so many amazing doctors and professionals at the 20th Vascular Society of Egypt International Annual Conference!

We were thrilled to share PIOON MEDICAL LASER and fibers by OBERON most recent advances in laser technology and fibers, especially designed for varicose vein treatment, with Techsky Egypt.

The conference gave us the chance to remind doctors about how these new techniques might improve the lives of patients suffering from varicose veins. Our laser devices provide a minimally invasive approach, promoting faster recovery times and improved cosmetic outcomes.`,
      images: [
        '../../../../assets/images/news/4/1.jpg',
        '../../../../assets/images/news/4/2.jpg',
        '../../../../assets/images/news/4/3.jpg',
        '../../../../assets/images/news/4/4.jpg'
      ]
    },
    {
      id: 7,
      title: 'Egyptian Society of Colon & Rectal Conference',
      description: `Doctors were very impressed with our state-of-the-art laser devices by PIOON MEDICAL LASER and fibers by OBERON.

Our creative solutions created attention and sparked amazing discussions about the direction colorectal surgery is taking.

Our pioneering laser fibers provide unmatched control and precision, simplifying even the most difficult procedures.`,
      images: [
        '../../../../assets/images/news/3/1.jpg',
        '../../../../assets/images/news/3/2.jpg',
        '../../../../assets/images/news/3/3.jpg',
        '../../../../assets/images/news/3/4.jpg'
      ]
    },
    {
      id: 8,
      title: '18th Annual Meeting of the Cairo Colorectal and Pelvic Floor',
      description: `Our team was honored to attend the 18th Annual Meeting of the Cairo Colorectal and Pelvic Floor, which was held from March 7th to 9th, 2024.

We had a great time connecting with doctors and demonstrating our latest advances PIOON MEDICAL LASER Devices and fibers by OBERON in Surgical laser technology for a variety of colorectal and pelvic floor applications.`,
      images: [
        '../../../../assets/images/news/2/1.jpg',
        '../../../../assets/images/news/2/2.jpg',
        '../../../../assets/images/news/2/3.jpg',
        '../../../../assets/images/news/2/4.jpg'
      ]
    },
    {
      id: 9,
      title: "EVC's 19th Annual Meeting",
      description: `Our team spent a productive few days at the EVC's 19th Annual Meeting, which was hosted by the Vascular Society of Egypt.

We enjoyed interacting with doctors and demonstrating our most recent PIOON MEDICAL LASER Devices and fibers by OBERON for Surgical laser technology.`,
      images: [
        '../../../../assets/images/news/1/1.jpg',
        '../../../../assets/images/news/1/2.jpg',
        '../../../../assets/images/news/1/3.jpg',
        '../../../../assets/images/news/1/4.jpg'
      ]
    },
    // Existing news items
    {
      id: 10,
      title: '6 - 9 March 2024, Cairo Egypt',
      description: `With great pleasure, we announce Tech Sky's participation in the 42nd Annual Meeting of ESS.

We had the privilege of introducing ourselves and introduce the latest laser technology with new Pioon Laser Devices and the latest advancements in laser fibers to a sizable gathering of scientists, Senior physicians, and surgeons during visits to the heads of departments, the board, the ESS association president Dr. Mohamed Faried, Secretary-General Dr. Abdel Moeti Hussein, and the members of the board of directors.`,
      images: [
        '../../../../assets/images/news/10/1.jpg',
        '../../../../assets/images/news/10/2.jpg',
        '../../../../assets/images/news/10/3.jpg',
        '../../../../assets/images/news/10/4.jpg',
        '../../../../assets/images/news/10/5.jpg'
      ]
    },
    {
      id: 11,
      title: '23-21 September 2023, Cairo Egypt',
      description: `We are thrilled to present our Remarkable participation in the 41st Annual Meeting of the Egyptian Society of Surgeons!

Highlights include showcasing the latest surgical advancements, such as Advanced laser devices, and engaging in valuable discussions with Esteemed surgeons and medical professionals.

We're honored to have Being part of this exceptional gathering that celebrated the art and science Of surgery and paved the way for future breakthroughs.

Stay tuned for more Updates as we express our gratitude to everyone who contributed to the Success of this event!`,
      images: [
        '../../../../assets/images/news/11/1.jpg',
        '../../../../assets/images/news/11/2.jpg',
        '../../../../assets/images/news/11/3.jpg',
        '../../../../assets/images/news/11/4.jpg'
      ]
    },
    {
      id: 12,
      title: '14-16 September 2023, Cairo Egypt',
      description: `Tech Sky proudly participated in the 7th Pan Arab Conference of Vascular Surgery and the 19th Annual Meeting of the Society, alongside the 4th Kasr Al Ainy Vascular Symposium & Mansoura Aortic Day.

Themed "The Quality of Care in Vascular Practice," this event took place. We engaged with leading national and international experts in vascular and endovascular surgery, exploring the latest updates and guidelines through panel discussions, lectures, and workshops.

In addition, we showcased advanced laser devices for varicose veins, vascular issues, and specialized catheters for vascular procedures.`,
      images: [
        '../../../../assets/images/news/12/1.jpg',
        '../../../../assets/images/news/12/2.jpg',
        '../../../../assets/images/news/12/3.jpg',
        '../../../../assets/images/news/12/4.jpg',
        '../../../../assets/images/news/12/5.jpg'
      ]
    },
    {
      id: 13,
      title: "We're thrilled to have attended ESCRS 2023",
      description: `The Annual Conference of the Egyptian Society of Colon and Rectal Surgeons!

This event brought together top surgeons from around the world to discuss the latest advancements topics in colon and rectal surgery.

We had the chance to share our experiences and showcase our advanced laser devices and different types of Laser Fibers with fellow medical professionals.`,
      images: [
        '../../../../assets/images/news/13/1.jpg',
        '../../../../assets/images/news/13/2.jpg',
        '../../../../assets/images/news/13/3.jpg',
        '../../../../assets/images/news/13/4.jpg'
      ]
    },
    {
      id: 14,
      title: '15-17 March 2023, Cairo Egypt',
      description: `We are thrilled to present our Remarkable participation in the 41st Annual Meeting Of the Egyptian Society of Surgeons!

Themed "The Quality of Care in Vascular Practice," this event took place. We engaged with leading national and international experts in vascular and endovascular surgery, exploring the latest updates and guidelines through panel discussions, lectures, and workshops.`,
      images: [
        '../../../../assets/images/news/14/1.jpg',
        '../../../../assets/images/news/14/2.jpg',
        '../../../../assets/images/news/14/3.jpg',
        '../../../../assets/images/news/14/4.jpg'
      ]
    },
    {
      id: 15,
      title: '2-3 March 2023, Cairo, Egypt',
      description: `Tech sky is proud to be a part of The 17th Annual Meeting And The 4th Joint Meeting of MSCP & MSFPD.

And get the trust of Board Members and Speakers who used our M2 Surgical Laser Device in Live Surgery.`,
      images: [
        '../../../../assets/images/news/15/1.jpg',
        '../../../../assets/images/news/15/2.jpg',
        '../../../../assets/images/news/15/3.jpg',
        '../../../../assets/images/news/15/4.jpg'
      ]
    }
  ];

  // Pagination
  itemsPerPage = 6;
  currentPage = 1;
  totalPages: number;

  constructor() {
    this.customOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      navSpeed: 700,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 1
        },
        940: {
          items: 1
        }
      },
      nav: false
    };

    this.totalPages = Math.ceil(this.allNews.length / this.itemsPerPage);
  }

  ngOnInit(): void {}

  get paginatedNews(): NewsItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.allNews.slice(startIndex, endIndex);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      // Scroll to top of news section
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }
}
