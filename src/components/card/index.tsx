import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface IListCard {
    title: string;
    category: string;
    description: string;
    difficulty:string;
  }

export function ListCard({ title, category, description, difficulty }: IListCard) {
    return (
      <TouchableOpacity>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.categoria} >{category}</Text>
          <Text style={styles.description} >{description}</Text>
          <Text  style={styles.difficulty}>difficulty Level: {difficulty} </Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom:20

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  
  },
  description: {
    fontSize: 16,
    color: '#888888',
  },
  categoria: {
    fontSize: 16,
    color: '#0CC0DF',
    marginBottom: 8,
  },
  difficulty: {
    fontSize: 12,
    color: '#888888',
    marginTop: 8,
  },
});