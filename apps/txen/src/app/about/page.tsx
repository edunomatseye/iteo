import React from 'react';
import { supabase } from '../../../supabase/db';

async function AboutUs() {
  const { data } = await supabase.from('todos').select();
  return (
    <div>
      <div className="flex p-5 m-5 bg-red-100 rounded-md border-l-indigo-200 shadow-lg border-y border-red-500">
        About us is everything you need to know abou this project. git
        filter-branch --index-filter `git rm --cached --ignore-unmatch
        path/to/file` HEAD
      </div>
      <div className="flex p-5 m-5 bg-red-100 rounded-md border-l-indigo-200 shadow-lg border-y border-red-500">
        About us is everything you need to know abou this project. <br />
        {JSON.stringify(data)}
      </div>
    </div>
  );
}

export default AboutUs;
