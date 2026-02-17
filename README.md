## 1) What is the difference between `null` and `undefined`?

**`undefined`**

যখন একটি ভেরিয়েবল ডিক্লেয়ার করা হয় কিন্তু কোনো মান assign করা হয় না, তখন এর মান `undefined` হয়

**`null`**

এটি একটি খালি বা অনুপস্থিত মান নির্দেশ করে

---

## 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?

**`map()`**

একটি array এর প্রতিটি element এ একটি ফাংশন apply করে। একটি নতুন array রিটার্ন করে যেখানে ফাংশনের রেজাল্ট থাকে। মূল array পরিবর্তন করে না

**`forEach()`**

একটি array এর প্রতিটি element এ একটি ফাংশন execute করে। কিছু রিটার্ন করে না (`undefined` রিটার্ন করে)। শুধুমাত্র side effects এর জন্য ব্যবহার করা হয়

## 3) What is the difference between `==` and `===`?

**`==`**

মান তুলনা করার আগে type coercion করে। বিভিন্ন data type কে একই type এ convert করে তারপর তুলনা করে

**`===`**

type coercion করে না। শুধুমাত্র যখন মান এবং type উভয়ই একই হয় তখনই true রিটার্ন করে

## 4) What is the significance of `async/await` in fetching API data?

`async/await` হলো asynchronous কোড লেখার একটি আধুনিক এবং সহজ উপায় যা Promise এর উপর ভিত্তি করে তৈরি।

**সুবিধাসমূহ:**

- কোড পড়তে এবং বুঝতে সহজ
- Error Handling সহজ
- একাধিক API কল পরিচালনা করা সহজ

---

## 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

### Global Scope

কোডের যেকোনো জায়গা থেকে অ্যাক্সেস করা যায়। ফাংশনের বাইরে ডিক্লেয়ার করা ভেরিয়েবল global scope এ থাকে

### Function Scope

শুধুমাত্র ফাংশনের ভিতরে অ্যাক্সেস করা যায়। `var`, `let`, এবং `const` দিয়ে ডিক্লেয়ার করা ভেরিয়েবল function scope এ থাকে

### Block Scope

শুধুমাত্র `let` এবং `const` block scope অনুসরণ করে। `{}` এর ভিতরে সীমাবদ্ধ।

## Live Website

[SwiftCart](https://genuine-cat-6f6ced.netlify.app/)
