import supabase from '../supabase';

export async function fetchAllVisitorsCount(): Promise<number | null> {
  try {
    const { count } = await supabase.from('weezip_visitors').select('id', { count: 'exact' });
    return count;
  } catch (error) {
    console.error('Error fetching visitors', error);
    return null;
  }
}

export async function fetchTodayVisitorsCount(): Promise<number | null> {
  try {
    const { count } = await supabase
      .from('weezip_visitors')
      .select('id', { count: 'exact' })
      .eq('visit_date', new Date().toISOString().slice(0, 10));
    return count;
  } catch (error) {
    console.error('Error fetching visitors', error);
    return null;
  }
}
