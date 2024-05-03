const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.GATSBY_SUPABASE_URL || '', process.env.GATSBY_SUPABASE_KEY || '');

exports.onInitialClientRender = async () => {
  const ipAddress = await getIpAddress();
  if (ipAddress) {
    const isDuplicate = await checkDuplicateVisit(ipAddress);
    if (!isDuplicate) {
      await recordVisit(ipAddress);
    }
  }
};

async function getIpAddress() {
  try {
    // more https://www.ipify.org/
    const response = await fetch('https://api64.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Failed to fetch IP address:', error);
    return null;
  }
}

async function recordVisit(ipAddress) {
  try {
    const { error } = await supabase
      .from('weezip_visitors')
      .insert([{ ip_address: ipAddress, visit_date: new Date().toISOString().slice(0, 10) }]);
    if (error) throw error;
  } catch (error) {
    console.error('Error recording visit:', error);
  }
}

async function checkDuplicateVisit(ipAddress) {
  try {
    const { count, error } = await supabase
      .from('weezip_visitors')
      .select('count', { count: 'exact' })
      .eq('ip_address', ipAddress)
      .eq('visit_date', new Date().toISOString().slice(0, 10)); // YYYY-MM-DD 형식

    if (error) throw error;

    return count > 0;
  } catch (error) {
    console.error('Error checking duplicate visit:', error);
    return null;
  }
}
