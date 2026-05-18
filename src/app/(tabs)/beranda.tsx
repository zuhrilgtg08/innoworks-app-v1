import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Colors, Spacing, FontSizes } from '../../constants/colors';
import { HeaderCard, ProjectCard } from '../../components/Cards';
import { Button } from '../../components/Button';

export default function BerandaScreen() {
  const projects = [
    {
      id: 1,
      category: 'OBJECT DETECTION',
      title: 'Kereta api & rel',
      images: 234,
      lastUpdated: '2 hari lalu',
    },
    {
      id: 2,
      category: 'SEGMENTATION',
      title: 'Rail semantic',
      images: 91,
      lastUpdated: '5 jam lalu',
    },
    {
      id: 3,
      category: 'CLASSIFICATION',
      title: 'Signaling class',
      images: 1102,
      lastUpdated: '1 hari lalu',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <HeaderCard
          title="Project List"
          subtitle="Kelola dan pilih proyek deteksi objek"
        />

        <Button
          title="+ Proyek Baru"
          onPress={() => console.log('New project')}
          variant="primary"
          size="lg"
          fullWidth
          style={{ marginBottom: Spacing.lg }}
        />

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            category={project.category}
            title={project.title}
            images={project.images}
            lastUpdated={project.lastUpdated}
            onPress={() => console.log(`Open project ${project.id}`)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  content: {
    padding: Spacing.lg,
  },
});
