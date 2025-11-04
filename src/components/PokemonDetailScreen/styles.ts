import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  detailScreenContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#eee',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  detailName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  detailImage: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  basicInfoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  section: {
    width: '100%',
    marginBottom: 10,
  },
  detailSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  detailTypesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  detailTypeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginHorizontal: 4,
    marginVertical: 2,
  },
  detailTypeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});