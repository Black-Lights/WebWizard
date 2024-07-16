<script setup>
// Import necessary components
import circularImgContentBoxLeft from '~/components/circularImgContentBoxLeft.vue';
import circularImgContentBoxRight from '~/components/circularImgContentBoxRight.vue';
import textComponent from '~/components/textComponent.vue';


</script>

<template>
  <div>
    <!-- Breadcrumbs navigation component -->
    <Breadcrumbs :crumbs="breadcrumbs" />
    <div class="top-section">
      <div>
        <h1>Our Blogs</h1>
      </div>
      <p>Stay updated with our latest blogs on various topics. Explore our posts and engage with our content.</p>
    </div>
    <!-- Text component with information about the services -->
    <div>
      <text-component
        title="Discover Our Insights"
        text="Welcome to our blog section, where we share our latest news, updates, and insights. Our blogs cover a range of topics, including community initiatives, project updates, and personal stories from our team and volunteers. Each post is crafted to keep you informed and engaged with our ongoing efforts and achievements. Whether you’re interested in learning more about our projects, getting involved in our initiatives, or simply staying connected with our community, you’ll find valuable content here. Dive into our blog posts to explore stories of impact, success, and inspiration from those who are making a difference. We invite you to join the conversation and become a part of our vibrant community.">
      </text-component>
    </div>

    <div class="card-section">
      <!-- Display the two latest blogs  -->
      <circular-img-content-box-left
        v-if="latestBlogs.length > 0"
        :title="latestBlogs[0].name"
        :text="latestBlogs[0].brief_description"
        :image="latestBlogs[0].img_url"
        :link="`/blogs/${latestBlogs[0].id}`"
      />
      <circular-img-content-box-right
        v-if="latestBlogs.length > 1"
        :title="latestBlogs[1].name"
        :text="latestBlogs[1].brief_description"
        :image="latestBlogs[1].img_url"
        :link="`/blogs/${latestBlogs[1].id}`"
      />
    </div>

    <!-- Additional text component for other blogs-->
    <div>
      <text-component
        title="All Blogs"
        text="Explore our entire collection of blog posts to stay up-to-date with our latest activities and initiatives. From behind-the-scenes looks at our projects to personal reflections from our team members, our blog is a space where we share our experiences and successes with you. Browse through our posts to find out how we’re making a difference in the community, discover new opportunities for involvement, and gain insight into the passion that drives our mission. We hope our blog inspires you to connect with us and be part of our journey.">
      </text-component>
    </div>
<!--    List of All blogs Automatically updating-->
    <div class="blog-list">
      <ul>
        <li v-for="blog in allBlogs" :key="blog.id">
          <NuxtLink :to="`/blogs/${blog.id}`">{{ blog.name }}</NuxtLink>
        </li>
      </ul>
    </div>
<!--    Subscribers form-->
    <div class="sub-form">
    <BlogSubscriptionForm />
    </div>

  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import BlogSubscriptionForm from '~/components/BlogSubscriptionForm.vue';

export default {
  head() {
    return {
      title: 'Blogs - Guiding-Light',
      meta: [
        { hid: 'description', name: 'description', content: 'Read the latest blogs from Guiding-Light to stay informed about our updates and stories.' },
        { hid: 'keywords', name: 'keywords', content: 'Guiding-Light, Blogs, Updates, Stories, News' },
      ],
    };
  },
  components: {
    Breadcrumbs,
    BlogSubscriptionForm,
  },
  data() {
    return {
      allBlogs: [],
      latestBlogs: [],
    };
  },
  computed: {
    breadcrumbs() {
      return [
        { label: 'Blogs', path: '/blogs' },
      ];
    },
  },
  methods: {
    async fetchBlogs() {
      try {
        // Fetch all blogs
        const { data: blogs, error } = await this.$supabase
          .from('blogs')
          .select('*')
          .order('date', { ascending: false });

        if (error) throw error;

        // Get the latest two blogs
        this.latestBlogs = blogs.slice(0, 2);

        // Get the list of all blogs for the blog list section
        this.allBlogs = blogs;
      } catch (error) {
        console.error('Error fetching blogs data:', error.message);
      }
    },
  },
  async mounted() {
    await this.fetchBlogs();
  },
};
</script>



<style scoped>
.top-section {
  background: url('static/img_blogs_01.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 40px;
  height: 600px;
  margin-top: 20px;
  text-align: center;
}

.top-section h1 {
  margin: 2px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  font-size: xx-large;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

.top-section p {
  margin: 2px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

.card-section {
  background: url('static/img_blogs_02.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 40px;
  margin: 0 auto;
  text-align: center;
}

.card-section h1 {
  margin: 2px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  font-size: xx-large;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

.card-section p {
  margin: 2px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

.circular-card-section {
  background: url('static/img_blogs_03.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 40px;
  margin: 0 auto;
  text-align: center;
}

.circular-card-section h1 {
  margin: 2px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  font-size: xx-large;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

.circular-card-section p {
  margin-top: 2px;
  margin-bottom: 30px;
  background: rgba(246, 246, 248, 0.7);
  border-radius: 20px;
  color: #000000;
  text-align: center;
  display: inline-block;
  padding: 10px;
}

.circular-image-card-container {
  display: flex;
  justify-content: center;
  gap: 8%;
  flex-wrap: wrap;
}

.circular-image-card-container div {
  max-width: 700px; /* Set a maximum width for the cards */
  flex: 1;
}

.circular-image-card-container circular-image-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-wrap: break-word; /* Ensure text wraps appropriately */
}

.blog-list {
  background: url('static/img_blogs_03.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 40px;
  margin: 0 auto;
  text-align: left;
}

.blog-list ul {
  list-style: disc;
  padding: 0;
}

.blog-list li {
  margin-bottom: 0.5rem;
}

.blog-list a {
  font-size: 18px;
  color: #2d2d31;
  text-decoration: none;
}

.blog-list a:hover {
  color: #69c3a0;
}

.sub-form {
  background: url('static/img_blogs_04.jpg') no-repeat center center fixed;
  background-size: cover;
/*  padding: 40px;
  margin-top: 20px;
  text-align: center;*/
}

@media (max-width: 600px) {
  .top-section {
    padding: 20px;
  }

  .top-section h1 {
    font-size: 1.5em;
    margin: 2px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .top-section p {
    font-size: 1em;
    margin: 2px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .text-section {
    padding: 20px;
  }

  .text-section h1 {
    font-size: 1.5em;
    margin: 2px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .text-section p {
    font-size: 1em;
    margin: 2px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .card-section {
    padding: 20px;
  }

  .card-section h1 {
    font-size: 1.5em;
    margin: 2px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .card-section p {
    font-size: 1em;
    margin: 2px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .circular-card-section {
    padding: 20px;
  }

  .circular-card-section h1 {
    font-size: 1.5em;
    margin: 2px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .circular-card-section p {
    font-size: 1em;
    margin-top: 2px;
    margin-bottom: 30px;
    background: rgba(246, 246, 248, 0.7);
    border-radius: 20px;
    color: #000000;
    text-align: center;
    display: inline-block;
  }

  .circular-image-card-container {
    flex-direction: column;
  }
}


</style>
