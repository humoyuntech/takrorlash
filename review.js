// git branch -M "011/useRef" 
// git commit -m "11-dars useRef"
// git push -u origin "011/useRef" 


// 8-dars
// lifting state up

// 9-dars
// ContextAPI Basics

// 10-dars
// 10-dars | ContextAPI Advanced

// 11-dars

// - memo ga o'rash uchun shartlar
// 1. Component child sifatida kelsa
// 2. Parentga setState bo'lishi kerak
// 3. props jo'natilsa

// useMemo ga o'rash uchun shartlar
// value qaytaradi
// 1. props jo'natilsa
// 2. non primitive bo'lishi kerak
// 3. Parentga setState bo'lishi kerak

// useCallback - function qaytaradi


//============useRef
/**
 * ReactJS’da `useRef` bu Reactning hooklaridan biri bo‘lib, u DOM elementlariga yoki har qanday boshqa saqlanadigan qiymatga murojaat qilish uchun ishlatiladi. `useRef` qiymatni o‘zgartirsa ham, komponentni qayta render qilmaydi. 

**`useRef`ning asosiy ishlatilishlari:**
1. **DOM elementlariga murojaat qilish:**
   `useRef` yordamida React komponenti ichida DOM elementiga murojaat qilish va uni boshqarish mumkin.
   
2. **O‘zgaruvchan qiymatlarni saqlash:**
   O‘zgaruvchan qiymatlar yoki holatlar (state) kabi komponentni qayta render qilishni talab qilmaydigan ma’lumotlarni saqlash uchun ishlatiladi.

### `useRef` Sintaksisi:
```javascript
const refContainer = useRef(boshlang'ichQiymat);
```

**Parametrlar:**  
- `boshlang'ichQiymat` - `useRef` yordamida yaratilgan obyektning dastlabki qiymati bo‘ladi.

**Qaytadi:**  
- `current` deb nomlangan xususiyatga ega obyekt (`refContainer.current`).

---

### DOM bilan ishlash misoli:
```javascript
import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Inputni fokusga olib keladi
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Ismingizni kiriting" />
      <button onClick={handleFocus}>Fokusni o'rnatish</button>
    </div>
  );
}

export default InputFocus;
```
**Natija:** `Fokusni o'rnatish` tugmasi bosilganda, kursor inputga o‘tadi.

---

### O‘zgaruvchan qiymatni saqlash:
```javascript
import React, { useRef, useState } from 'react';

function Counter() {
  const count = useRef(0);

  const increment = () => {
    count.current += 1; // `current` qiymati o'zgaradi
    console.log(`Hozirgi count: ${count.current}`);
  };

  return (
    <div>
      <button onClick={increment}>Sonni oshirish</button>
    </div>
  );
}

export default Counter;
```
**Natija:** Har safar tugma bosilganda, konsolga yangilangan `count` qiymati chiqadi, lekin komponent qayta render qilinmaydi.

---

**Muhim jihatlar:**
1. `useRef`dagi qiymatni o‘zgartirish komponentni qayta render qilmaydi.
2. `useRef` asosan **domga murojaat qilish** va **saqlangan qiymatlarni boshqarish** uchun ishlatiladi.
3. Agar qiymatni o‘zgartirish bilan birga render qilish kerak bo‘lsa, unda `useState` ishlatiladi.

Savollaringiz bo‘lsa, yozishingiz mumkin! 😊
 */







// git branch -m 07-dars main
// git fetch origin
// git branch -u origin/main main
// git remote set-head origin -a


