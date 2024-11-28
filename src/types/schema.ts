export interface UserCollection {
  uuid: string;
  username: string;
  email: string;
  phone_code: string | null;
  phone_number: string | null;
  balance: string;
  status: string;
  user_type: string; // e.g., "user"
  user_mode: string; // e.g., "job"
  device_type: string | null;
  OTP_created_at: string | null; // ISO 8601 format or null
  email_verified_at: string | null; // ISO 8601 format or null
  phone_number_verified_at: string | null; // ISO 8601 format or null
  created_at: Date; // ISO 8601 format
  updated_at: Date; // ISO 8601 format

  // User profile
  user_profile: {
    user_uuid: string;
    first_name: string | null;
    last_name: string | null;
    avatar: string | null;
    biography: string | null;
    country: string | null;
    city: string | null;
    town: string | null;
    created_at: string; // ISO 8601 format
    updated_at: string; // ISO 8601 format
  };

  // User job profile
  user_job_profile: {
    user_uuid: string;
    headline: string | null;
    industry: string | null;
    website: string | null;
    resume_cv: string | null;
    cover_letter: string | null;
    years_of_experience: number | null;
    experience_level: string | null;
    education: string | null;
    experience: string | null;
    projects: string | null;
    job_type: string | null;
    salary: string | null;
    locations: string | null;
    socials: string | null;
    created_at: string; // ISO 8601 format
    updated_at: string; // ISO 8601 format
  };
}

export interface UsersInfo {
  current_page: number;
  data: UserCollection[];
  first_page_url: string | null;
  next_page_url: string | null;
  prev_page_url: string | null;
  total: number;
  per_page: number;
}
