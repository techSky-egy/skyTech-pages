import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface Workshop {
  id: number;
  title: string;
  description: string;
  images: string[];
}

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {
  customOptions: OwlOptions;

  // All workshops data
  allWorkshops: Workshop[] = [
    // Old workshops (6 to 1) - displayed first
    {
      id: 1,
      title: 'Laser in Proctology Workshop - Minia University',
      description: `The Laser in Proctology Workshop: Hemorrhoids, Fissure, and Fistula was successfully concluded after a productive training day that combined scientific lectures with hands-on clinical practice at the Liver and Gastrointestinal Hospital, Minia University.

The workshop featured active participation and in-depth scientific discussions, along with a comprehensive presentation of the latest laser techniques in proctologic surgery, enabling participating physicians to explore modern treatment approaches and practical applications.

We extend our sincere appreciation to the distinguished professors for their valuable scientific contributions and support.

The workshop also included precise hands-on demonstrations using Pioon Medical Laser systems, with full applications of surgical fibers provided by Oberon Fiber Technologies, under the technical support and sponsorship of Techsky.`,
      images: [
        '../../../../assets/images/workshops/6/1.jpg',
        '../../../../assets/images/workshops/6/2.jpg',
        '../../../../assets/images/workshops/6/3.jpg',
        '../../../../assets/images/workshops/6/4.jpg'
      ]
    },
    {
      id: 2,
      title: 'Proctology Workshop - May 1st, 2025, Sheraton Hotel, Cairo',
      description: `Techsky Egypt successfully hosted the Laser in Proctology Workshop at Sheraton Hotel, Cairo, featuring a comprehensive scientific program followed by hands-on surgical training.

Led by Dr. Ibrahim El Ghozlany and Dr. Ehab Abdelqadir, the workshop covered key laser techniques including hemorrhoidoplasty, FILAC, and SILAC, with both theoretical insights and real-case practice using advanced 1470nm diode laser systems.

The event saw strong engagement from attending surgeons, reflecting Techsky Egypt's ongoing commitment to advancing education and innovation in surgical laser solutions by Pioon Medical Laser and OPERON fibers.`,
      images: [
        '../../../../assets/images/workshops/5/1.jpg',
        '../../../../assets/images/workshops/5/2.jpg',
        '../../../../assets/images/workshops/5/3.jpg',
        '../../../../assets/images/workshops/5/4.jpg',
        '../../../../assets/images/workshops/5/5.jpg'
      ]
    },
    {
      id: 3,
      title: 'K12 Facial Contouring Laser Workshop - Clinica Joelle',
      description: `K12 Facial Contouring Laser workshop! From insightful live demonstrations to hands-on learning, the event was a true testament to how the K12 Laser from PIOON MEDICAL LASER and fibers by OPERON is revolutionizing aesthetic treatments.

This advanced device is helping doctors deliver precision, safety, and outstanding results to their patients like never before!

A big thank you to all the amazing doctors who joined us - it was a pleasure sharing this journey with you! A special shoutout to Dr. Ahmed Kameel for leading the workshop with his expertise and making the event truly inspiring.

And of course, a huge thank you to Clinica Joelle for hosting us in such a welcoming and professional space.`,
      images: [
        '../../../../assets/images/workshops/4/1.jpg',
        '../../../../assets/images/workshops/4/2.jpg',
        '../../../../assets/images/workshops/4/3.jpg',
        '../../../../assets/images/workshops/4/4.jpg'
      ]
    },
    {
      id: 4,
      title: 'Proctology Workshop - October 29th, Al-Azhar University, Assiut',
      description: `On Tuesday, October 29th, at Al-Azhar University, Assiut - Department of General Surgery.

The workshop highlighted the latest advancements in laser technology for the treatment of anorectal diseases, showcasing the capabilities of the advanced Pioon Medical Laser system in improving patient comfort and accelerating recovery.

Participants attended live demonstrations and explored innovative laser applications that significantly reduce pain and postoperative complications compared to conventional surgical methods.

The event provided a highly interactive and hands-on educational experience and received strong positive feedback from attendees, who praised the efficiency and advanced techniques presented throughout the workshop.`,
      images: [
        '../../../../assets/images/workshops/3/1.jpg',
        '../../../../assets/images/workshops/3/2.jpg',
        '../../../../assets/images/workshops/3/3.jpg',
        '../../../../assets/images/workshops/3/4.jpg'
      ]
    },
    {
      id: 5,
      title: 'Lasers in Proctology Workshop - October 3rd & 4th, 2024',
      description: `We're excited to share the success of our first day & second day workshop on Lasers in Proctology, held on October 3 & 4, 2024!

Led by Dr. Ibrahim El Ghozlany and Dr. Ehab Abdelkadir, attendees gained powerful insights into the latest advancements in laser technology.

Our experts showcased cutting-edge laser devices by PIOON MEDICAL LASER and specialized fibers by OBERON, enhancing understanding of their applications in these critical areas.

The feedback has been overwhelmingly positive, highlighting the informative nature of the discussions.`,
      images: [
        '../../../../assets/images/workshops/2/1.jpg',
        '../../../../assets/images/workshops/2/2.jpg',
        '../../../../assets/images/workshops/2/3.jpg',
        '../../../../assets/images/workshops/2/4.jpg'
      ]
    },
    {
      id: 6,
      title: 'Techsky Egypt Proctology Workshop',
      description: `Techsky Egypt and PIOON MEDICAL LASER and fibers by OPERON in Proctology Workshop.

The workshop was led by Dr. Ibrahim El Ghozlany and Dr. Ehab Abdelqadir, who guided participants through a solid theoretical foundation and practical insights into modern laser proctology techniques.

Attendees gained hands-on exposure to minimally invasive procedures using advanced surgical laser systems, alongside demonstrations of high-precision laser fibers that enhance surgical control and efficiency.

The program also encouraged active knowledge exchange through clinical discussions, helping participants refine their laser skills and build confidence in treating anal conditions.

Through such initiatives, Techsky Egypt continues to equip proctology specialists with advanced technology and expertise to improve patient outcomes.`,
      images: [
        '../../../../assets/images/workshops/1/1.jpg',
        '../../../../assets/images/workshops/1/2.jpg',
        '../../../../assets/images/workshops/1/3.jpg',
        '../../../../assets/images/workshops/1/4.jpg'
      ]
    },
    // Existing workshops
    {
      id: 7,
      title: '6 & 7 September 2023, Cairo Egypt',
      description: `Experience laser precision in proctology at Tech Sky! Join us to witness the latest advancements in treating hemorrhoids, fissures, and fistulas. Our immersive training and live surgical showcases will amaze you.

Discover cutting-edge methods to integrate lasers into proctology and be part of our global community of innovative surgeons.

Embrace the future of medical care with Tech Sky.`,
      images: [
        '../../../../assets/images/workshops/7/1.jpg',
        '../../../../assets/images/workshops/7/2.jpg',
        '../../../../assets/images/workshops/7/3.jpg',
        '../../../../assets/images/workshops/7/4.jpg',
        '../../../../assets/images/workshops/7/5.jpg'
      ]
    },
    {
      id: 8,
      title: '26 & 27 July 2023, Cairo Egypt',
      description: `Master Laser Precision in Our Workshop!

Join Tech Sky, we're dedicated to staying at the forefront of medical advancements to bring you the latest in proctology techniques.

Get ready to be amazed as lasers transform the way we treat hemorrhoids, fissures, and fistula treatment. Our expert surgeons will take you through immersive hands-on training and riveting live surgical showcases.

Explore the latest methods and tools that enhance the capabilities of laser technology. Our training equips you to seamlessly integrate lasers into proctology.

Surgeons across the globe trust Tech Sky as their guide to innovation and education. Be part of our dynamic community.`,
      images: [
        '../../../../assets/images/workshops/8/1.jpg',
        '../../../../assets/images/workshops/8/2.jpg',
        '../../../../assets/images/workshops/8/3.jpg',
        '../../../../assets/images/workshops/8/4.jpg'
      ]
    },
    {
      id: 9,
      title: '4 & 5 May 2023, Cairo Egypt',
      description: `Workshop on the use of laser in proctology.

We always strive to develop and use the latest devices, believing in science and progress.

The surgeons will train on how to use the laser in anal diseases (hemorrhoids, fissures, fistulas).

Workshop is explaining the methods and instruments to gain the best results for the laser in proctology accompanied by live surgeries training with our experts.

Practical and theoretical training is now available at Techsky, step by step.

We always care and strive to provide you with training services.`,
      images: [
        '../../../../assets/images/workshops/9/1.jpg',
        '../../../../assets/images/workshops/9/2.jpg',
        '../../../../assets/images/workshops/9/3.jpg',
        '../../../../assets/images/workshops/9/4.jpg',
        '../../../../assets/images/workshops/9/5.jpg'
      ]
    },
    {
      id: 10,
      title: '21 Aug 2023, Egypt',
      description: `Our collaboration with Al-Azhar University Hospital, Department of General Surgery, Faculty of Medicine, Assiut University.

Reaffirming our commitment to knowledge and learning. As part of this initiative, we organized a laser workshop focusing on anal diseases.

During this workshop, renowned specialists, consultants, and doctors from the General Surgery Department came together to address various proctologic cases.

We utilized the M2 Surgical Laser to perform procedures for cases like hemorrhoids, anal fissures, and anal and perianal fistulas.`,
      images: [
        '../../../../assets/images/workshops/10/1.jpg',
        '../../../../assets/images/workshops/10/2.jpg',
        '../../../../assets/images/workshops/10/3.jpg',
        '../../../../assets/images/workshops/10/4.jpg'
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

    this.totalPages = Math.ceil(this.allWorkshops.length / this.itemsPerPage);
  }

  ngOnInit(): void {}

  get paginatedWorkshops(): Workshop[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.allWorkshops.slice(startIndex, endIndex);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      // Scroll to top of workshops section
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
