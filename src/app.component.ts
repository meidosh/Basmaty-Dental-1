
import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

type ServiceCategory = 'Preventive & General' | 'Cosmetic' | 'Restorative & Surgical';

interface Service {
  id: string;
  icon: string;
  category: ServiceCategory;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  benefits: { en: string[]; ar: string[] };
  duration: { en: string; ar: string };
  preparation?: { en: string; ar: string };
}

interface Doctor {
  id: number;
  imageUrl: string;
  name: { en: string; ar: string };
  specialty: { en: string; ar: string };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent {
  
  language = signal<'en' | 'ar'>('ar');

  services = signal<Service[]>([
    {
      id: 's1',
      icon: 'fa-solid fa-tooth',
      title: { en: 'General Dentistry', ar: 'طب الأسنان العام' },
      category: 'Preventive & General',
      description: { 
        en: 'Comprehensive care including check-ups, cleanings, and fillings to maintain your oral health and prevent future problems.',
        ar: 'رعاية شاملة تتضمن الفحوصات والتنظيفات والحشوات للحفاظ على صحة فمك ومنع المشاكل المستقبلية.'
      },
      benefits: {
        en: ['Prevents cavities and gum disease.', 'Early detection of potential oral health issues.', 'Maintains fresh breath and a bright smile.'],
        ar: ['يمنع التسوس وأمراض اللثة.', 'الكشف المبكر عن مشاكل صحة الفم المحتملة.', 'يحافظ على نفس منعش وابتسامة مشرقة.']
      },
      duration: { en: '30-60 minutes', ar: '30-60 دقيقة' },
      preparation: { 
        en: 'No special preparation needed. Just come ready to smile!',
        ar: 'لا حاجة لتحضيرات خاصة. فقط تعال مستعدًا للابتسام!'
      }
    },
    {
      id: 's2',
      icon: 'fa-solid fa-wand-magic-sparkles',
      title: { en: 'Cosmetic Dentistry', ar: 'طب الأسنان التجميلي' },
      category: 'Cosmetic',
      description: { 
        en: 'Enhance your smile with teeth whitening, veneers, and bonding for a brilliant, confidence-boosting appearance.',
        ar: 'عزز ابتسامتك بتبييض الأسنان، الفينير، والترابط للحصول على مظهر لامع يعزز الثقة.'
      },
      benefits: {
        en: ['Brightens and whitens stained teeth.', 'Corrects chips, cracks, and imperfections.', 'Boosts self-esteem with a beautiful smile.'],
        ar: ['يفتح ويبيض الأسنان المصبوغة.', 'يصحح الكسور والشقوق والعيوب.', 'يعزز الثقة بالنفس بابتسامة جميلة.']
      },
      duration: { en: 'Varies (1 hour to multiple visits)', ar: 'متغير (ساعة واحدة إلى عدة زيارات)' },
      preparation: {
        en: 'A consultation is required to determine the best cosmetic plan for you.',
        ar: 'مطلوب استشارة لتحديد أفضل خطة تجميلية لك.'
      }
    },
    {
      id: 's3',
      icon: 'fa-solid fa-user-doctor',
      title: { en: 'Orthodontics', ar: 'تقويم الأسنان' },
      category: 'Restorative & Surgical',
      description: { 
        en: 'Straighten your teeth and correct your bite with modern braces and clear aligners for improved function and aesthetics.',
        ar: 'قم بتصويب أسنانك وتصحيح عضتك باستخدام التقويم الحديث والشفاف لتحسين الوظيفة والجمال.'
      },
      benefits: {
        en: ['Improves teeth alignment and bite.', 'Easier to clean teeth, reducing risk of decay.', 'Enhances facial aesthetics and smile.'],
        ar: ['يحسن محاذاة الأسنان والعضة.', 'يسهل تنظيف الأسنان، مما يقلل من خطر التسوس.', 'يعزز جماليات الوجه والابتسامة.']
      },
      duration: { en: '12-24 months on average', ar: '12-24 شهرًا في المتوسط' },
      preparation: {
        en: 'Requires initial consultation, X-rays, and impressions.',
        ar: 'يتطلب استشارة أولية وأشعة سينية وطبعات.'
      }
    },
    {
      id: 's4',
      icon: 'fa-solid fa-teeth-open',
      title: { en: 'Dental Implants', ar: 'زراعة الأسنان' },
      category: 'Restorative & Surgical',
      description: { 
        en: 'Restore your smile with durable and natural-looking dental implants, the gold standard for replacing missing teeth.',
        ar: 'استعد ابتسامتك بزراعة أسنان متينة وطبيعية المظهر، وهي المعيار الذهبي لتعويض الأسنان المفقودة.'
      },
      benefits: {
        en: ['Permanent solution for missing teeth.', 'Looks, feels, and functions like natural teeth.', 'Prevents bone loss in the jaw.'],
        ar: ['حل دائم للأسنان المفقودة.', 'تبدو وتشعر وتعمل مثل الأسنان الطبيعية.', 'يمنع فقدان العظام في الفك.']
      },
      duration: { en: 'Several months, including healing time', ar: 'عدة أشهر، بما في ذلك وقت الشفاء' },
      preparation: {
        en: 'A comprehensive oral health evaluation and imaging are necessary.',
        ar: 'من الضروري إجراء تقييم شامل لصحة الفم والتصوير.'
      }
    },
    {
      id: 's5',
      icon: 'fa-solid fa-shield-halved',
      title: { en: 'Preventive Care', ar: 'الرعاية الوقائية' },
      category: 'Preventive & General',
      description: { 
        en: 'Proactive treatments like sealants and fluoride applications to protect your teeth from decay before it starts.',
        ar: 'علاجات استباقية مثل السيلنت وتطبيقات الفلورايد لحماية أسنانك من التسوس قبل أن يبدأ.'
      },
      benefits: {
        en: ['Significantly reduces the risk of cavities.', 'Strengthens tooth enamel.', 'Ideal for both children and adults.'],
        ar: ['يقلل بشكل كبير من خطر التسوس.', 'يقوي مينا الأسنان.', 'مثالي للأطفال والبالغين على حد سواء.']
      },
      duration: { en: '15-30 minutes', ar: '15-30 دقيقة' },
      preparation: {
        en: 'Best applied after a professional cleaning.',
        ar: 'يفضل تطبيقه بعد التنظيف الاحترافي.'
      }
    },
    {
      id: 's6',
      icon: 'fa-solid fa-children',
      title: { en: 'Pediatric Dentistry', ar: 'طب أسنان الأطفال' },
      category: 'Preventive & General',
      description: { 
        en: 'Gentle and friendly dental care for children, focusing on education and prevention to ensure a lifetime of healthy smiles.',
        ar: 'رعاية أسنان لطيفة وودية للأطفال، تركز على التثقيف والوقاية لضمان حياة مليئة بالابتسامات الصحية.'
      },
      benefits: {
        en: ['Creates a positive dental experience for kids.', 'Monitors growth and development.', 'Instills good oral hygiene habits early.'],
        ar: ['يخلق تجربة أسنان إيجابية للأطفال.', 'يراقب النمو والتطور.', 'يغرس عادات نظافة الفم الجيدة في وقت مبكر.']
      },
      duration: { en: '30-45 minutes', ar: '30-45 دقيقة' },
      preparation: {
        en: 'We create a fun and welcoming environment for our youngest patients.',
        ar: 'نحن نخلق بيئة ممتعة ومرحبة لأصغر مرضانا.'
      }
    },
     {
      id: 's7',
      icon: 'fa-solid fa-x-ray',
      title: { en: 'Root Canal Therapy', ar: 'علاج قناة الجذر' },
      category: 'Restorative & Surgical',
      description: { 
        en: 'A procedure to treat infection at the center of a tooth, saving your natural tooth and relieving pain.',
        ar: 'إجراء لعلاج العدوى في مركز السن، مما ينقذ سنك الطبيعي ويخفف الألم.'
      },
      benefits: {
        en: ['Relieves severe toothache.', 'Saves the natural tooth from extraction.', 'Eliminates infection and protects surrounding teeth.'],
        ar: ['يخفف من ألم الأسنان الشديد.', 'ينقذ السن الطبيعي من الخلع.', 'يقضي على العدوى ويحمي الأسنان المحيطة.']
      },
      duration: { en: '60-90 minutes per visit (may require 1-2 visits)', ar: '60-90 دقيقة لكل زيارة (قد يتطلب 1-2 زيارة)' },
      preparation: {
        en: 'Avoid eating for a few hours before the procedure.',
        ar: 'تجنب الأكل لبضع ساعات قبل الإجراء.'
      }
    },
    {
      id: 's8',
      icon: 'fa-solid fa-gem',
      title: { en: 'Teeth Whitening', ar: 'تبييض الأسنان' },
      category: 'Cosmetic',
      description: { 
        en: 'Professional in-office or take-home whitening treatments to safely and effectively brighten your smile by several shades.',
        ar: 'علاجات تبييض احترافية في العيادة أو في المنزل لتفتيح ابتسامتك بأمان وفعالية بعدة درجات.'
      },
      benefits: {
        en: ['Fast and noticeable results.', 'Removes stubborn stains from coffee, tea, and tobacco.', 'Safer and more effective than over-the-counter products.'],
        ar: ['نتائج سريعة وملحوظة.', 'يزيل البقع العنيدة من القهوة والشاي والتبغ.', 'أكثر أمانًا وفعالية من المنتجات التي لا تستلزم وصفة طبية.']
      },
      duration: { en: '60 minutes (in-office)', ar: '60 دقيقة (في العيادة)' },
      preparation: {
        en: 'A dental cleaning is recommended before whitening for best results.',
        ar: 'يوصى بتنظيف الأسنان قبل التبييض للحصول على أفضل النتائج.'
      }
    }
  ]);

  doctors = signal<Doctor[]>([
    {
      id: 1,
      imageUrl: 'https://picsum.photos/seed/doctor1/400/400',
      name: { en: 'Dr. Sarah Al-Farsi', ar: 'د. سارة الفارسي' },
      specialty: { en: 'Lead Dentist & Orthodontist', ar: 'طبيبة أسنان رئيسية وأخصائية تقويم أسنان' }
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/seed/doctor2/400/400',
      name: { en: 'Dr. Ahmed Khan', ar: 'د. أحمد خان' },
      specialty: { en: 'Cosmetic & Implant Specialist', ar: 'أخصائي تجميل وزراعة الأسنان' }
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/seed/doctor3/400/400',
      name: { en: 'Dr. Fatima Hassan', ar: 'د. فاطمة حسن' },
      specialty: { en: 'Pediatric Dentist', ar: 'طبيبة أسنان أطفال' }
    }
  ]);

  appointmentBooked = signal(false);

  serviceCategories: ServiceCategory[] = ['Preventive & General', 'Cosmetic', 'Restorative & Surgical'];
  categoryTranslations: { [key in ServiceCategory | 'All']: { en: string; ar: string } } = {
    'All': { en: 'All Services', ar: 'كل الخدمات' },
    'Preventive & General': { en: 'Preventive & General', ar: 'وقائية وعامة' },
    'Cosmetic': { en: 'Cosmetic', ar: 'تجميلية' },
    'Restorative & Surgical': { en: 'Restorative & Surgical', ar: 'ترميمية وجراحية' },
  };

  selectedCategory = signal<ServiceCategory | 'All'>('All');
  
  filteredServices = computed(() => {
    const category = this.selectedCategory();
    if (category === 'All') {
      return this.services();
    }
    return this.services().filter(service => service.category === category);
  });

  expandedService = signal<string | null>(null);

  bookAppointment(event: Event): void {
    event.preventDefault();
    console.log('Appointment form submitted.');
    this.appointmentBooked.set(true);
  }

  selectCategory(category: ServiceCategory | 'All'): void {
    this.selectedCategory.set(category);
    this.expandedService.set(null);
  }

  toggleService(serviceId: string): void {
    this.expandedService.update(current => current === serviceId ? null : serviceId);
  }

  toggleLanguage(): void {
    this.language.update(lang => lang === 'en' ? 'ar' : 'en');
  }
}
