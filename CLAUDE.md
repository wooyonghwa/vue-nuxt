# CLAUDE.md

## 프로젝트 개요

Nuxt 3 기반의 강의 플랫폼 클론 프로젝트입니다.

## 기술 스택

- **Framework**: Nuxt 3 (^3.9.0)
- **언어**: TypeScript (strict mode)
- **UI 라이브러리**: nuxt-quasar-ui
- **Linting**: ESLint + Prettier
- **빌드 도구**: nuxi

## 프로젝트 구조

```
.
├── app.vue                  # 루트 컴포넌트 (NuxtLayout + NuxtPage)
├── nuxt.config.ts           # Nuxt 설정 (typescript typeCheck: true)
├── pages/                   # 파일 기반 라우팅
│   ├── index.vue            # 메인 페이지
│   ├── about.vue            # 소개 페이지
│   ├── [...slug].vue        # catch-all 라우트
│   └── course/
│       ├── [courseSlug].vue # 강의 상세 페이지
│       └── [id]-example.vue # 예시 페이지
├── components/              # 공통 컴포넌트
│   ├── AppCard.vue
│   ├── CourseCard.vue
│   └── VideoPlayer.vue
├── composables/             # 재사용 로직
│   ├── useCourse.ts         # 단일 강의 조회 (prev/next 포함)
│   ├── useCourses.ts        # 전체 강의 목록 조회
│   └── coursesData.ts       # 강의 데이터 정의
├── layouts/                 # 레이아웃
│   └── default.vue
├── types/                   # TypeScript 타입
│   ├── course.ts            # Course, CourseWithPath 인터페이스
│   └── global.d.ts          # 전역 타입 (Maybe<T> 등)
└── server/                  # 서버 사이드 코드
```

## 핵심 타입

```ts
// types/course.ts
interface Course {
  title: string;
  subtitle: string;
  courseSlug: string;
  content: string;
  thumbnail: string;
  video: string;
  rating: number;
  reviewsCount: number;
  studentCount: number;
  reviewsUrl: string;
  inflearnUrl: string;
  gymcodingUrl: string;
}

interface CourseWithPath extends Omit<Course, 'rating' | 'reviewsCount' | 'studentCount'> {
  rating: string;
  reviewsCount: string;
  studentCount: string;
  path: string;
}
```

## 개발 명령어

```bash
npm run dev          # 개발 서버 실행
npm run build        # 프로덕션 빌드
npm run generate     # 정적 사이트 생성
npm run preview      # 빌드 미리보기
npm run lint         # ESLint 자동 수정
npm run lint-prettier # Prettier 포맷팅
```

## 코딩 컨벤션

- TypeScript strict 모드 사용, `any` 타입 지양
- Composition API + `<script setup lang="ts">` 사용
- 컴포저블은 `composables/` 디렉토리에 위치 (Nuxt auto-import 활용)
- 컴포넌트는 PascalCase 명명
- 라우트 파라미터는 파일명으로 표현 (`[slug].vue`)
- `Maybe<T>` 타입은 `global.d.ts`에 정의된 전역 타입 사용

### 파일 상단 주석

모든 파일 첫 줄에 해당 파일의 역할을 한 줄로 설명하는 주석을 작성한다.

```ts
// 강의 목록을 조회하는 컴포저블
```

```vue
<!-- 강의 카드 컴포넌트: 썸네일, 제목, 평점을 표시한다 -->
```

- `.ts` / `.js` 파일: `//` 주석 사용
- `.vue` 파일: `<!-- -->` 주석을 `<template>` 태그 위에 작성
- 주석은 "무엇을 하는 파일인지"를 명확하게 한 문장으로 작성

## Hooks (.claude/settings.json)

프로젝트에 다음 hooks가 설정되어 있습니다.

| 이벤트 | 대상 | 동작 |
|--------|------|------|
| `PostToolUse` | `Edit`, `Write` | `.vue` `.ts` `.js` 파일 저장 시 Prettier 자동 포맷팅 |
| `Notification` | 전체 | Claude가 입력을 기다릴 때 macOS 데스크톱 알림 |

## Nuxt 특이사항

- `nuxt.config.ts`에서 `typescript.typeCheck: true` 설정 (빌드 시 타입 검사)
- `nuxt-quasar-ui` 모듈 사용 중
- `app.vue`는 `NuxtLayout` + `NuxtPage` 구조
- 컴포저블과 컴포넌트는 Nuxt auto-import 사용 (명시적 import 불필요)
