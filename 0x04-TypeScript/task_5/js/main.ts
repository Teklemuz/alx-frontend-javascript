interface MajorCredits {
    credits: number;
    brand: string;
  }
  
  interface MinorCredits {
    credits: number;
    brand: string;
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: subject1.brand }; 
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: subject1.brand }; 
  }
  
  const majorSubject1: MajorCredits = { credits: 6, brand: 'JavaScript' }; 
  const majorSubject2: MajorCredits = { credits: 4, brand: 'Python' };      
  
  const minorSubject1: MinorCredits = { credits: 3, brand: 'Math' };        
  const minorSubject2: MinorCredits = { credits: 5, brand: 'History' };     
  
  const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
  const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
  
  console.log(`Total Major Credits for ${totalMajorCredits.brand}: ${totalMajorCredits.credits}`);
  console.log(`Total Minor Credits for ${totalMinorCredits.brand}: ${totalMinorCredits.credits}`);
  
